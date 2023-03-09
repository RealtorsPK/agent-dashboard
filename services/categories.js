import axios from "axios";


export const fetchCategories = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rc-category${query || ''}`);

export const fetchRRCategories = (query) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rr-category${query || ''}`)