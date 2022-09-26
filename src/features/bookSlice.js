import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: localStorage.getItem('book') || [],
    value: ""
  },
  reducers: {
    addBook: (state, action) => {
      const book = (action.payload);
      localStorage.setItem('book', [state.book, book ]);
    },
    deleteBook: (state, action) => {
      const book = (action.payload);
      localStorage.setItem('book', [state.book, book ]);
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBook, deleteBook} = bookSlice.actions

export default bookSlice.reducer