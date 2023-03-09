import axios from "axios";

export const isValidToken = (token) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rc-agent/me`, { headers: { Authorization: `Bearer ${token}` } });
