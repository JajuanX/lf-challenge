import { useEffect, useState } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import { Link, useParams } from "react-router-dom";
import './CharacterDetailPage.scss'

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

const CharacterDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character | null>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (!id) return;

		const fetchCharacter = async () => {
			try {
				setLoading(true);
				setError("");

				const response = await disneyService.getCharacterById(id);
				console.log(response.data);
				
				setCharacter(response.data);
			} catch (error) {
				setError("Failed to load Character");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchCharacter();
	}, [id]);

	if (loading) return <p className="character-detail__loading">Loading...</p>;
	if (error) return <p className="character-detail__error">{error}</p>;
	if (!character) return null;

	return (
		<main className="character-detail">
			<Link to="/" className="character-detail__back">
				Back to List
			</Link>
			<CharacterDetailsCard character={character} />
		</main>
	);
};

export default CharacterDetailPage;
