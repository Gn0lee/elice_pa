import axios from 'axios';

export const eliceApiInstance = axios.create({
	baseURL: 'https://api-rest.elice.io',
});
