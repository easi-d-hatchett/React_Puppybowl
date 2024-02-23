import api from "./Api";

const puppyPlayersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Players"],
    }),
}),
});

export const {useGetPlayersQuery} = puppyPlayersApi;