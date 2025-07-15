// src/axios/custom.ts
import axios from "axios";

// Fallback if VITE_API_BASE is not set
const API_BASE = import.meta.env.VITE_API_BASE || "https://navgrihini.onrender.com/api";

const customFetch = axios.create({
  baseURL: API_BASE,
  headers: {
    'Accept': 'application/json',
  },
  // withCredentials: true, // Uncomment if using auth cookies/sessions
});

export default customFetch;
