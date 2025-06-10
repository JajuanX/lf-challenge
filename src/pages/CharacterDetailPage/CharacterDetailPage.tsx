import { useEffect, useState } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import { Link, useParams } from "react-router-dom";
import './CharacterDetailPage.scss'

type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
	allies: string[];
	enemies: string[];
	sourceUrl?: string;
};

const CharacterDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character | null>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (!id) return;

		const fetchCharacter = async () => {
			try {
				setLoading(true);
				setError("");

				const response = await disneyService.getCharacterById(id);
				console.log(response.data);
				
				setCharacter(response.data);
			} catch (error) {
				setError("Failed to load Character");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchCharacter();
	}, [id]);

	if (loading) return <p className="detail__loading">Loading...</p>;
	if (error) return <p className="detail__error">{error}</p>;
	if (!character) return null;

	return (
		<main className="detail">
			<Link to="/" className="detail__back">
				Back to List
			</Link>
			<section className="detail__card">
				{character.imageUrl && (
					<img
						src={character.imageUrl}
						alt={`Portrait of ${character.name}`}
						className="detail__image"
					/>
				)}

				<h1 className="detail__name">{character.name}</h1>

				<section className="detail__section">
					{character.films?.length > 0 && (
						<article>
							<h2 className="detail__label">Films</h2>
							<ul className="detail__list">
								{character.films?.map((film) => {
									return <li className="detail__item" key={film}>{film}</li>;
								})}
							</ul>
						</article>
					)}
					
					{character.tvShows?.length > 0 && (
						<article>
							<h2 className="detail__label">TV Shows</h2>
							<ul className="detail__list">
								{character.tvShows?.map((show) => {
									return <li className="detail__item" key={show}>{show}</li>;
								})}
							</ul>
						</article>
					)}

					{character.allies?.length > 0 && (
						<article>
							<h2 className="detail__label">Allies</h2>
							<ul className="detail__list">
								{character.allies?.map((ally) => {
									return <li className="detail__item" key={ally}>{ally}</li>;
								})}
							</ul>
						</article>
					)}

					{character.enemies?.length > 0 && (
						<article>
							<h2 className="detail__label">Enemies</h2>
							<ul className="detail__list">
								{character.enemies?.map((enemy) => {
									return <li className="detail__item" key={enemy}>{enemy}</li>;
								})}
							</ul>
						</article>
					)}
				</section>
			</section>
		</main>
	);
};

export default CharacterDetailPage;
