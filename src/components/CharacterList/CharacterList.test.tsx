import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CharacterList from "./CharacterList";
import { describe, it, expect } from "vitest";

describe("CharacterList (deep rendering)", () => {
	const mockCharacters = [
		{
			_id: "1",
			name: "Mickey Mouse",
			imageUrl: "https://example.com/mickey.jpg",
		},
		{
			_id: "2",
			name: "Donald Duck",
			imageUrl: "https://example.com/donald.jpg",
		},
	];

	it("renders character cards with correct content", () => {
		render(
			<MemoryRouter>
				<CharacterList characters={mockCharacters} />
			</MemoryRouter>
		);

		expect(screen.getAllByRole("link")).toHaveLength(2);
	});

	it("renders no cards when character list is empty", () => {
		render(
			<MemoryRouter>
				<CharacterList characters={[]} />
			</MemoryRouter>
		);

		expect(screen.queryByRole("link")).not.toBeInTheDocument();
	});
});
