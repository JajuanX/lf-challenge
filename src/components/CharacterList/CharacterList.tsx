import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.scss";

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

type Props = {
	characters: Character[];
};

/**
 * Displays a grid of character cards.
 * @param {Object} props
 * @param {Character[]} props.characters - The list of characters to display.
 */
const CharacterList = ({ characters }: Props) => {
	return (
		<section className="character-list">
			{characters.map((character) => {
				return (
					<CharacterCard
						key={character._id}
						id={character._id}
						name={character.name}
						imageUrl={character.imageUrl}
					/>
				);
			})}
		</section>
	);
};

export default CharacterList;
