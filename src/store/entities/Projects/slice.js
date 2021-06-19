import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    loading: false,
    activeRequestsCount: 0,
  },
  reducers: {
    projectsGettingStart: (state) => {
      state.loading = true;
      state.activeRequestsCount += 1;
    },
    projectsGettingSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const {
  projectsGettingStart,
  projectsGettingSuccess,
} = projectsSlice.actions;

export default projectsSlice.reducer;
