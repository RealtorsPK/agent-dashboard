import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Fetch all Features
export const fetchFeatures = (query) => axios.get(`${apiUrl}/rc-features${query || ''}`);

// Get Features by id
export const getFeaturesById = (id) => axios.get(`${apiUrl}/rc-features/${id}`);