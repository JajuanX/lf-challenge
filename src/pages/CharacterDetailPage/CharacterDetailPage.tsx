import { useEffect } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import { useParams } from "react-router-dom";

const CharacterDetailPage = () => {
	const { id } = useParams<{id : string}>()

	useEffect(() => {
		if(!id) return;

		const getCharacterById = async () => {
			const character = await disneyService.getCharacterById(id);
			console.log(character);
		};

		getCharacterById();
	}, [id]);

	return (
		<>
			<h1>Character Detail Page</h1>
		</>
	);
};

export default CharacterDetailPage;
