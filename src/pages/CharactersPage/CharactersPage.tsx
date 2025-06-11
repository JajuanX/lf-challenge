import { useEffect, useState } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import "./CharactersPage.scss";
import CharacterList from "../../components/CharacterList/CharacterList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { useSearchParams } from "react-router-dom";

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

/**
 * CharactersPage shows a paginated list of Disney characters.
 * Fetches data from the Disney API and manages pagination via query params.
 */
const CharactersPage = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [totalPages, setTotalPages] = useState<number | null>(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const rawPage = searchParams.get("page");
	const pageParam = parseInt(rawPage ?? "", 10);
	const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

	useEffect(() => {
		const fetchCharacters = async () => {
			setLoading(true);
			setError("");

			try {
				const response = await disneyService.getCharacters(page);
				setCharacters(response.data);
				setTotalPages(response.info.totalPages);
				window.scrollTo({ top: 0, behavior: "smooth" });
			} catch (err) {
				setError("Failed to load characters");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCharacters();
	}, [page]);

	const handleNext = () => {
		if (totalPages && page < totalPages) {
			setSearchParams({ page: String(page + 1) });
		}
	};

	const handlePrevious = () => {
		if (page > 1) {
			setSearchParams({ page: String(page - 1) });
		}
	};

	return (
		<main className="characters-page">
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
				onNext={handleNext}
				onPrev={handlePrevious}
				loading={loading}
			/>
		</main>
	);
};

export default CharactersPage;
