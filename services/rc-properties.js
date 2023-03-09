import axios from "axios";

// Fetch all Properties
export const fetchRcProperties = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/property/by-agent${query || ''}`);

// Add Property
export const addRcProperties= (payload) => axios.post(`${process.env.NEXT_PUBLIC_API_URL}/property`, payload);

// Get Property by id
export const getRcPropertyById = (id) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/property/by-agent/${id}`);

// Update Property
export const updateRcProperty = (id, payload) => axios.put(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, payload);

// Delete Property
export const publishedRcProperty = (id, payload) => axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}/publish`, payload);