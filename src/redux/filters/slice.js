import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';
import { selectFilter } from './selectors';

const INITIAL_STATE = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return (
      contacts?.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      ) || []
    );
  }
);
