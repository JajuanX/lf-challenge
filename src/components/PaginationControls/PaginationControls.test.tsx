import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PaginationControls from "./PaginationControls";
import { describe, expect, it } from "vitest";

describe("PaginationControls", () => {
	it("disables previous on first page", () => {
		render(
			<MemoryRouter>
				<PaginationControls page={1} totalPages={10} loading={false} />
			</MemoryRouter>
		);

		// Use getByText because the disabled state uses a <span>, not a <a>
		const prevText = screen.getByText(/previous/i);

		expect(prevText).toHaveAttribute("aria-disabled", "true");
		expect(prevText.tagName).toBe("SPAN");
	});
});
