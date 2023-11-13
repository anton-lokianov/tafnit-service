import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000";

export const shiftApi = createApi({
  reducerPath: "shiftApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Shifts", "Drivers"],
  endpoints: (builder) => ({
    manageShift: builder.mutation({
      query: (id) => ({
        url: `shifts/manageShift/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetShiftsQuery, useManageShiftMutation } = shiftApi;
