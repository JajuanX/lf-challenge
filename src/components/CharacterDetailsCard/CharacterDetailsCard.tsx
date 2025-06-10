import CharacterImage from "../CharacterImage/CharacterImage"
import CharacterSection from "../CharacterSection/CharacterSection"
import './CharacterDetailsCard.scss'

type Props = {
	character: {
		name: string
		imageUrl?: string
		films: string[]
		allies: string[]
		enemies: string[]
		tvShows: string[]
	}
}

const CharacterDetailsCard = ({character}: Props) => {

	return (
		<section className="character-details-card">
			<CharacterImage 
				src={character.imageUrl}
				alt={`Portrait of ${character.name}`}
			/>
			<h1 className="character-details-card__name">{character.name}</h1>

			<section className="character-details-card__section">
				<CharacterSection title="Films" items={character.films} />
				<CharacterSection title="TV Shows" items={character.tvShows} />
				<CharacterSection title="Allies" items={character.allies} />
				<CharacterSection title="Enemies" items={character.enemies} />
			</section>
		</section>
	)
}

export default CharacterDetailsCard