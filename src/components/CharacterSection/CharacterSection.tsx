import "./CharacterSection.scss";

type Props = {
	title: string;
	items?: string[];
};

/**
 * Displays a titled list of character-related items (films, allies, etc.).
 * If no items are provided, the component returns null.
 * @param title - The section title.
 * @param items - An optional array of strings to render as list items.
 */
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
