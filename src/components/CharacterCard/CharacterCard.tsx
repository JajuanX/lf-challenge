import { Link } from "react-router-dom";
import './CharacterCard.scss'

type Props = {
	id: string
	name: string
	imageUrl?: string
}

const CharacterCard = ({id, name, imageUrl} : Props) => {
	return (
		<article className="card" key={id}>
			<Link to={`/characters/${id}`} className="card__link">
				{imageUrl ? (
					<img
						src={imageUrl}
						alt={`Portrait of ${name}`}
						className="card__image"
					/>
				) : (
					<div className="card__image card__image--placeholder"></div>
				)}
				<h2 className="card__name">{name}</h2>
			</Link>
		</article>
	);
};
export default CharacterCard;
