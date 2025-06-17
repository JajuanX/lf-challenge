import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotfoundPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/characters" replace />} />
				<Route path="/characters" element={<CharactersPage />} />
				<Route path="/characters/:id" element={<CharacterDetailPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/notfound" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
