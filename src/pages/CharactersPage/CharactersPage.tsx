import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { disneyService } from "../../services/disney-service/disney.service";
import CharacterList from "../../components/CharacterList/CharacterList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import "./CharactersPage.scss";

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

type State = {
	loading: boolean;
	error: string;
	characters: Character[];
	totalPages: number | null;
};

/**
 * CharactersPage shows a paginated list of Disney characters.
 * Fetches data from the Disney API and manages pagination via query params.
 */
const CharactersPage = () => {
	const [searchParams] = useSearchParams();
	const rawPage = searchParams.get("page");
	const pageParam = parseInt(rawPage ?? "", 10);
	const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

	const [state, setState] = useState<State>({
		loading: false,
		error: "",
		characters: [],
		totalPages: null,
	});

	useEffect(() => {
		const fetchCharacters = async () => {
			setState((prev) => ({ ...prev, loading: true, error: "" }));

			try {
				const response = await disneyService.getCharacters(page);

				setState((prev) => ({
					...prev,
					characters: response.data,
					totalPages: response.info.totalPages,
				}));

				window.scrollTo({ top: 0, behavior: "smooth" });
			} catch (err) {
				setState((prev) => ({
					...prev,
					error: "Failed to load characters",
				}));
				console.error(err);
			} finally {
				setState((prev) => ({ ...prev, loading: false }));
			}
		};

		fetchCharacters();
	}, [page]);

	const { loading, error, characters, totalPages } = state;

	return (
		<main className="characters-page container">
			<h1 className="characters-page__title">Disney Character Explorer</h1>
			<p className="characters-page__blurb">
				Browse thousands of Disney characters, from timeless classics to modern
				heroes. Click on any character to learn more about their story,
				appearances, and connections!
			</p>

			<CharacterList characters={characters} />

			<div className="characters-page__loading-container">
				{loading && <p className="characters-page__loading">Loading...</p>}
				{error && <p className="characters-page__error">{error}</p>}
			</div>

			<PaginationControls
				page={page}
				totalPages={totalPages}
				loading={loading}
			/>
		</main>
	);
};

export default CharactersPage;
