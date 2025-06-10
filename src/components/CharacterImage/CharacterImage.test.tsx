import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CharacterImage from "./CharacterImage";

describe("CharacterImage", () => {
	it("renders an image when src is provided", () => {
		render(<CharacterImage src="https://example.com/image.jpg" alt="Mickey Mouse" />);
		const img = screen.getByAltText("Mickey Mouse");

		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
	})

	it("returns null when src is not provided", () => {
		const {container} = render(<CharacterImage alt="Mickey Mouse" />);
		expect(container.firstChild).toBeNull();
	})
})