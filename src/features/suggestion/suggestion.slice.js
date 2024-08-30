import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch suggestion
export const fetchSuggestion = createAsyncThunk('suggestions/fetchSuggestion', async () => {
  const response = await fetch('http://localhost:3004/api/suggestion');
  const data = await response.json();
  return data.data;
});

const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState: {
    suggestion: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSuggestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suggestion = action.payload;
      })
      .addCase(fetchSuggestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default suggestionsSlice.reducer;
export const selectSuggestion = (state) => state.suggestions.suggestion;
export const selectSuggestionStatus = (state) => state.suggestions.status;
