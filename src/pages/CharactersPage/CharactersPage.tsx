import { useEffect, useState } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import "./CharactersPage.scss";
import CharacterList from "../../components/CharacterList/CharacterList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

const CharactersPage = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [totalPages, setTotalPages] = useState<number | null>(null);

	useEffect(() => {
		const fetchCharacters = async () => {
			setLoading(true);
			setError("");

			try {
				const response = await disneyService.getCharacters(page);				
				setCharacters(response.data);
				setTotalPages(response.info.totalPages);
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
			setPage((prevValue) => prevValue + 1);
		}
	};

	const handlePrevious = () => {
		if (page > 1) {
			setPage((prevValue) => prevValue - 1);
		}
	};

	return (
		<main className="characters">
			<h1 className="characters__title">Disney Characters Page</h1>
			{loading && <p className="characters__loading">Loading...</p>}
			{error && <p className="characters__error">{error}</p>}

			<CharacterList characters={characters} />
			<PaginationControls 
				page={page}
				totalPages={totalPages}
				onNext={handleNext}
				onPrev={handlePrevious}
			/>
		</main>
	);
};

export default CharactersPage;
