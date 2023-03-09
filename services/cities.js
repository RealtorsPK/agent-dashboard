import axios from "axios";

export const fetchCities = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/city${query || ''}`);
