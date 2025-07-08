// src/axios/custom.ts
import axios from "axios";


const customFetch = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,  // now “/api”
    headers: {
      'Accept': 'application/json',
    },
  });

export default customFetch;
