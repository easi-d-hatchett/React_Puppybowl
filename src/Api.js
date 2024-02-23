import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =   "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-Easi";


const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Players"],
});

export default api;