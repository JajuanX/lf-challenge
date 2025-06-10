import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CharacterSection from "./CharacterSection";

describe("CharacterSection", () => {
	it("renders title and items when provided", () => {
		render(<CharacterSection title="Allies" items={["Buzz", "Woody"]} />);

		expect(screen.getByText("Allies")).toBeInTheDocument();
		expect(screen.getByText("Buzz")).toBeInTheDocument();
		expect(screen.getByText("Woody")).toBeInTheDocument();
	})

	it("does not render when items are undefined", () => {
		const {container} = render(<CharacterSection title="Enemies" />);

		expect(container.firstChild).toBeNull();
	})

	it("does not render when items is an empty array", () => {
		const {container} = render(<CharacterSection title="Enemies" items={[]} />);
		expect(container.firstChild).toBeNull();
	})

})