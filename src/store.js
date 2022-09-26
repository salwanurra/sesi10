import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './features/bookSlice'
export default configureStore({
  reducer: {
    book: bookSlice
  }
})