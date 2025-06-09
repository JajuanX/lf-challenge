import { useEffect } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import "./CharactersPage.scss";
type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

const CharactersPage = () => {
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


	return (
		<>
			<h1>Characters Page</h1>
		</>
	);
};

export default CharactersPage;
