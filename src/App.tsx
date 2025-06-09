import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CharactersPage />} />
				<Route path="/characters/:id" element={<CharacterDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
