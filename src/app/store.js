import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
