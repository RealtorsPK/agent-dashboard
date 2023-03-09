import axios from "axios";

export const fetchAreas = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/area${query || ''}`);
