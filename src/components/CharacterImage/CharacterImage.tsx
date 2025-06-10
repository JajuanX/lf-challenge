import "./CharacterImage.scss";

type Props = {
	src?: string;
	alt: string;
};

/**
 * Renders a character's image if a valid `src` is provided.
 * @param src - The image URL (optional).
 * @param alt - The alt text for accessibility.
 */
const CharacterImage = ({ src, alt }: Props) => {
	if (!src) return null;

	return <img src={src} alt={alt} className="character__image" />;
};

export default CharacterImage;
