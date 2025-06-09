import {describe, it, expect, vi } from "vitest";
import axios from "axios";
import { disneyService } from "./disney.service";

vi.mock('axios')
const mockedAxiosGet = axios.get as unknown as ReturnType<typeof vi.fn>;

describe('disneyService', () => {
	it('should fetch characters from the API', async () => {
		const mockData = {
			data: [{name: 'Mickey'}]
		}

		mockedAxiosGet.mockResolvedValueOnce({data: mockData});
		
		const result = await disneyService.getCharacters(1);

		expect(result).toEqual(mockData);
		expect(mockedAxiosGet).toHaveBeenCalledWith(
			'https://api.disneyapi.dev/character?page=1&pageSize=10'
		)
	})

	it('should fetch character by ID', async () => {
		const mockCharacter = {name: "Donald Duck", _id: '123'};

		mockedAxiosGet.mockResolvedValueOnce({data: mockCharacter});
		const result = await disneyService.getCharacterById('123');

		expect(result).toEqual(mockCharacter);
		expect(mockedAxiosGet).toHaveBeenCalledWith(
			'https://api.disneyapi.dev/character/123'
		)
	})
})