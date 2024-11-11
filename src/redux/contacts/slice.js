import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import toast, { Toaster } from 'react-hot-toast';

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
        toast('Contact successfully added');
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(editContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;

        const updatedContact = action.payload;
        state.contacts.items = state.contacts.items.map(contact =>
          contact.id === updatedContact.id ? updatedContact : contact
        );

        toast('Contact successfully changed');
      })
      .addCase(editContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          item => action.payload.id !== item.id
        );
        toast('Contact successfully removed');
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      }),
  reducers: {
    clearContacts: state => {
      state.contacts.items = [];
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { clearContacts } = contactsSlice.actions;
