import { Link } from "react-router-dom";
import "./CharacterCard.scss";

type Props = {
	id: string;
	name: string;
	imageUrl?: string;
};

/**
 * Displays a clickable card for a Disney character.
 * Includes image (if available), name, and links to the character detail page.
 *
 * @param id - Unique identifier for the character.
 * @param name - Character's display name.
 * @param imageUrl - Optional image URL to show the character's portrait.
 */
const CharacterCard = ({ id, name, imageUrl }: Props) => {
	return (
		<article className="character-card" key={id}>
			<Link to={`/characters/${id}`} className="character-card__link">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={`Portrait of ${name}`}
						className="character-card__image"
					/>
				) : (
					<div className="character-card__image character-card__image--placeholder"></div>
				)}
				<h2 className="character-card__name">{name}</h2>
			</Link>
		</article>
	);
};
export default CharacterCard;
