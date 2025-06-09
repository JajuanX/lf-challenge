import { useEffect } from "react";
import { disneyService } from "./services/disney-service/disney.service.js";
import "./App.css";

function App() {
	useEffect(() => {
		const getCharacters = async () => {
			const characters = await disneyService.getCharacters()
			console.log(characters);
		}

		getCharacters()

		const getCharacterById = async (id: string | number) => {
			const character = await disneyService.getCharacterById(id);
			console.log(character);
			
		}

		getCharacterById('112');
	}, [])
	return (
		<>
			<h1>Disney Characters</h1>
		</>
	);
}

export default App;
