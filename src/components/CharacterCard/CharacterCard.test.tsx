import {render, screen} from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('CharacterCard', () => {
	it('renders character name and image', () => {
		render(
			<MemoryRouter>
				<CharacterCard
					id='1'
					name='Mickey Mouse'
					imageUrl='http://image.url/mickey.jpg'
				/>
			</MemoryRouter>
		)
		expect(screen.getByText(/Mickey Mouse/i)).toBeInTheDocument();
		expect(screen.getByAltText(/Portrait of Mickey Mouse/i)).toBeInTheDocument();
	})
})