// This file retrieves the flashcard data from local storage, creating an empty array if the data does not exist.
//  The file then defines a flashcardSlice, which consists of an initial state, an object containing reducer functions, 
//  and a slice name. This slice generates action types and action creators that correspond to the reducers and state, 
//  which are then exported to allow for use in other files within the application. By utilizing Redux,
//  we can update the state of the application using these exported actions and reducers.

import { createSlice } from "@reduxjs/toolkit";


// The initial state of the flashcardSlice is set to the data retrieved from local storage
const initialState = {

    // Within this code, a ternary operator is utilized to check whether the flashcard data exists in local storage. 
    // If the data exists, it is parsed using the getItem() method and stored in a variable. 
    // If the data does not exist, an empty array is assigned to the variable
    flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards")) : [],
};

// Within this code, we are defining the flashcardSlice by providing it with an initial state, 
// a collection of reducer functions, and a name that represents the slice. 
// This slice is responsible for generating action types and action creators that
//  correspond to the reducers and state defined in the slice
export const flashcardSlice = createSlice({
    name: "flashcard",
    initialState,
    reducers: {
        setFlashCard(state , action) {
            state.flashcards.push({
                card: action.payload
            })

            localStorage.setItem("flashcards", JSON.stringify(state.flashcards));

        }
    }
});

export const { setFlashCard } = flashcardSlice.actions;

export default flashcardSlice.reducer;