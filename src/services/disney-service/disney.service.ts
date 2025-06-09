import axios from "axios";

const BASE_URL = "https://api.disneyapi.dev";
const PAGE_SIZE = 10;

export const disneyService = {
	async getCharacters(page = 1) {
		const response = await axios.get(`${BASE_URL}/character?page=${page}&pageSize=${PAGE_SIZE}`);
		return response.data
	},

	async getCharacterById(id: number | string) {
		const response = await axios.get(`${BASE_URL}/character/${id}`);
		return response.data;
	}
}