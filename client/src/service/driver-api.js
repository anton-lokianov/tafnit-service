import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:4000";

export const driverApi = createApi({
  reducerPath: "driverApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Drivers"],
  endpoints: (builder) => ({
    getDrivers: builder.query({
      query: () => "drivers/getDrivers",
    }),

    // adding driver
    createDriver: builder.mutation({
      query: (driver) => ({
        url: "drivers/createDriver",
        method: "POST",
        body: driver,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: driver } = await queryFulfilled;
          dispatch(
            driverApi.util.updateQueryData("getDrivers", undefined, (draft) => {
              draft?.push(driver);
            })
          );
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useGetDriversQuery, useCreateDriverMutation } = driverApi;
