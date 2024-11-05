import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    fetchServices: (state) => {
      state.loading = true;
    },
    fetchServicesSuccess: (state, action) => {
      state.services = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchServicesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchServices, fetchServicesSuccess, fetchServicesFailure } =
  servicesSlice.actions;
export default servicesSlice.reducer;
