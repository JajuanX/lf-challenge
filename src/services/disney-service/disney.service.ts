import axios from "axios";

const BASE_URL = "https://api.disneyapi.dev";
const PAGE_SIZE = 10;

export const disneyService = {
	/**
	 * Fetches a paginated list of Disney characters.
	 * @param page - The page number to fetch (defaults to 1).
	 * @returns A promise resolving to character data and pagination info.
	 */
	async getCharacters(page = 1) {
		const response = await axios.get(
			`${BASE_URL}/character?page=${page}&pageSize=${PAGE_SIZE}`
		);
		return response.data;
	},

	/**
	 * Fetches a single character by ID.
	 * @param id - The unique character ID.
	 * @returns A promise resolving to a character object.
	 */
	async getCharacterById(id: number | string) {
		const response = await axios.get(`${BASE_URL}/character/${id}`);
		return response.data;
	},
};
