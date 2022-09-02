// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import initialContacts from 'data/contacts.json';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CONTACTS = 'contacts';
const tagTypes = ['contacts'];

export const contactsApi = createApi({
  reducerPath: CONTACTS,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6311b9bf19eb631f9d77a9ff.mockapi.io/',
  }),
  tagTypes: tagTypes,

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => CONTACTS,
      providesTags: tagTypes,
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: CONTACTS,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: tagTypes,
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `${CONTACTS}/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// const contactsSlice = createSlice({
//   name: 'contacts,',
//   initialState: {
//     items: [...initialContacts],
//     filter: '',
//   },
//   reducers: {
//     addContacts: (state, action) => {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };

//       // used immer------

//       //fixedReducer2:(state, action) => {
//       // state.items.push(action.payload);
//       // }

//       // or
//       //  fixedReducer1: (state, action) => void state.push(action.payload),
//     },

//     deleteContacts: (state, action) => {
//       return {
//         ...state,
//         items: state.items.filter(({ id }) => id !== action.payload),
//       };
//     },

//     changeFilter: (state, action) => {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     },
//   },
// });

// //export
// export const contactsReducer = contactsSlice.reducer;
// export const { addContacts, deleteContacts, changeFilter } =
//   contactsSlice.actions;

// //LocalStorage
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const persistContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
