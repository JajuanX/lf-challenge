import "./CharacterSection.scss";

type Props = {
	title: string;
	items?: string[];
};

const CharacterSection = ({ title, items }: Props) => {
	if (!items || items.length === 0) return null;

	return (
		<article className="character-section">
			<h2 className="character-section__label">{title}</h2>
			<ul className="character-section__list">
				{items.map((item) => (
					<li className="character-section__item" key={item}>
						{item}
					</li>
				))}
			</ul>
		</article>
	);
};

export default CharacterSection;
