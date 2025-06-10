import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CharacterDetailsCard from "./CharacterDetailsCard";

describe("CharacterDetailsCard", () => {
	const mockCharacter = {
		name: "Elsa",
		imageUrl: "https://example.com/elsa.jpg",
		films: ["Frozen", "Frozen II"],
		allies: ["Anna", "Olaf"],
		enemies: ["Hans"],
		tvShows: ["Once Upon a Time"],
	};

	it("renders characters name and image", () => {
		render(<CharacterDetailsCard character={mockCharacter} />);
		expect(screen.getByRole("heading", { name: "Elsa" })).toBeInTheDocument();
		expect(screen.getByAltText("Portrait of Elsa")).toBeInTheDocument();
		expect(screen.getByAltText("Portrait of Elsa")).toHaveAttribute(
			"src",
			mockCharacter.imageUrl
		);
	});

	it("renders characters name and image", () => {
		render(<CharacterDetailsCard character={mockCharacter} />);

		expect(screen.getByText("Films")).toBeInTheDocument();
		expect(screen.getByText("TV Shows")).toBeInTheDocument();
		expect(screen.getByText("Allies")).toBeInTheDocument();
		expect(screen.getByText("Enemies")).toBeInTheDocument();
	});
});
