import { createSlice } from '@reduxjs/toolkit';
import photosData from './photos.data';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: photosData,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      return state.filter(photo => photo.id !== action.payload);
    },
  },
});

export const { addPhoto, removePhoto } = photosSlice.actions;
export const selectAllPhotos = (state) => state.photos;
export const selectFilteredPhotos = (state) => {
  const searchTerm = state.search.searchTerm.toLowerCase();
  return state.photos.filter(photo =>
    photo.caption.toLowerCase().includes(searchTerm)
  );
};

export default photosSlice.reducer;
