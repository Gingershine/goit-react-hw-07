import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactSlice = createSlice({  
  name: 'contacts',
  initialState: {items: [], isLoading: false, error: null},
  extraReducers: (builder) => {
builder
.addCase(fetchContacts.pending, handlePending)
.addCase(fetchContacts.rejected, handleRejected)
.addCase(fetchContacts.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
state.items = action.payload;})

.addCase (addContact.pending, handlePending)
.addCase (addContact.rejected, handleRejected)
.addCase (addContact.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null;
state.items.push(action.payload);
})
.addCase (deleteContact.pending, handlePending)
.addCase (deleteContact.rejected, handleRejected)
.addCase (deleteContact.fulfilled, (state, action) => {
state.isLoading = false;
state.error = null
const index = state.items.findIndex(contact => contact.id === action.payload.id);
state.items.splice(index, 1);
})

}
  
})


export const contactsReducer = contactSlice.reducer;

