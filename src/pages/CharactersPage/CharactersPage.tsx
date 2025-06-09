import { useEffect } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import "./CharactersPage.scss";

const CharactersPage = () => {
	useEffect(() => {
		const getCharacters = async () => {
			const characters = await disneyService.getCharacters();
			console.log(characters);
		};

		getCharacters();
	}, []);

	return (
		<>
			<h1>Characters Page</h1>
		</>
	);
};

export default CharactersPage;
