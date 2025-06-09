import { useEffect } from "react";
import { disneyService } from "../../services/disney-service/disney.service";
import "./CharactersPage.scss";
type Character = {
	_id: string;
	name: string;
	imageUrl?: string;
};

const CharactersPage = () => {
	useEffect(() => {
		const fetchCharacters = async () => {
			setLoading(true);
			setError("");

			try {
				const response = await disneyService.getCharacters(page);
				
				setCharacters(response.data);
				setTotalPages(response.info.totalPages);
			} catch (err) {
				setError("Failed to load characters");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};


	return (
		<>
			<h1>Characters Page</h1>
		</>
			<section className="characters__list">
				{characters.map((character) => {
					return (
						<article className="characters__card" key={character._id}>
							<Link
								to={`/characters/${character._id}`}
								className="characters_link"
							>
								{character.imageUrl ? (
									<img
										src={character.imageUrl}
										alt={`Portrait of ${character.name}`}
										className="characters__image"
									/>
								) : (
									<div className="characters__image characters__image--placeholder"></div>
								)}
								<h2 className="characters__name">{character.name}</h2>
							</Link>
						</article>
					);
				})}
			</section>

			<nav className="characters__pagination">
				<button 
					className="characters__button"
					onClick={() => handlePrevious()}
					disabled={page === 1}
				>
					Previous
				</button>
				<span className="characters__page">
					Page {page}
				</span>
				<button 
					className="characters__button"
					onClick={() => handleNext()}
					disabled={totalPages ? page >= totalPages : false}	
				>
					Next
				</button>
			</nav>
		</main>
	);
};

export default CharactersPage;
