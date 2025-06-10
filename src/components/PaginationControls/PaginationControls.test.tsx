import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PaginationControls from "./PaginationControls";


describe('PaginationControls', () => {
	it('disables previous on first', () => {
		render(
			<PaginationControls 
				page={1}
				totalPages={5}
				onNext={() => {}}
				onPrev={() => {}}
			/>
		)

		const prevButton = screen.getByRole('button', {name: /Previous/i})
		expect(prevButton).toBeDisabled();
	})

})