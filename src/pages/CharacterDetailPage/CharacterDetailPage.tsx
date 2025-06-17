import { useEffect, useState } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import { useNavigate, useParams } from "react-router-dom";
import "./CharacterDetailPage.scss";
import CharacterDetailsCard from "../../components/CharacterDetailsCard/CharacterDetailsCard";

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
	allies: string[];
	enemies: string[];
	sourceUrl?: string;
};

type State = {
	character: Character | null;
	loading: boolean;
	error: string;
};

/**
 * CharacterDetailPage shows info for a specific character by ID.
 * Displays name, image, films, allies, and enemies.
 */
const CharacterDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const numericId = Number(id);
	const navigate = useNavigate();

	const [state, setState] = useState<State>({
		character: null,
		loading: false,
		error: "",
	});

	useEffect(() => {
		if (!id || Number.isNaN(numericId)) return;

		const fetchCharacter = async () => {
			setState((prev) => ({ ...prev, loading: true, error: "" }));

			try {
				const response = await disneyService.getCharacterById(numericId);

				const data = response.data;
				const hasNoContent =
					(!data.films || data.films.length === 0) &&
					(!data.tvShows || data.tvShows.length === 0) &&
					(!data.allies || data.allies.length === 0) &&
					(!data.enemies || data.enemies.length === 0);

				if (hasNoContent) {
					navigate("/notfound", { replace: true });
					return;
				}

				setState((prev) => ({ ...prev, character: data }));
			} catch (err) {
				console.error(err);
				setState((prev) => ({
					...prev,
					error: "Failed to load character",
				}));
			} finally {
				setState((prev) => ({ ...prev, loading: false }));
			}
		};

		fetchCharacter();
	}, [id, numericId, navigate]);

	const { character, loading, error } = state;

	if (loading) return <p className="character-detail__loading">Loading...</p>;
	if (error) return <p className="character-detail__error">{error}</p>;
	if (!character) return null;

	return (
		<main className="character-detail container">
			<button onClick={() => navigate(-1)} className="character-detail__back">
				Back to List
			</button>

			<CharacterDetailsCard character={character} />
		</main>
	);
};

export default CharacterDetailPage;
