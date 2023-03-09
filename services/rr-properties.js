import axios from "axios";

// Fetch all Properties
export const fetchRrProperties = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rr-property/by-agent${query || ''}`);

// Add Property
export const addRrProperties = (payload) => axios.post(`${process.env.NEXT_PUBLIC_API_URL}/rr-property`, payload);

// Get Property by id
export const getPropertyById = (id) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rr-property/by-agent/${id}`);

// Update Property
export const updateProperty = (id, payload) => axios.put(`${process.env.NEXT_PUBLIC_API_URL}/rr-property/${id}`, payload);

// Delete Property
export const propertyPublished = (id, payload) => axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/rr-property/${id}/publish`, payload);