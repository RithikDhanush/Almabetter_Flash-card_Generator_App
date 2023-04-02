// The purpose of this file is to set up the Redux store, which can be accessed in other files throughout the application.
import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "./feature/flashcardSlice";

const store = configureStore ({
    reducer: {
        flashcard: flashcardReducer
    }
});

export default store;
