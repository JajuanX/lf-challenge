import "./CharacterImage.scss";

type Props = {
	src?: string;
	alt: string;
};

const CharacterImage = ({src, alt}: Props) => {
	if (!src) return null;

	return <img src={src} alt={alt} className="character__image" />;
};

export default CharacterImage;
