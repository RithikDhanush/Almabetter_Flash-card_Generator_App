/*This code defines the TextError component which is used to display error messages ,
when a user enters invalid values in the create flashcard form */
import React from "react";

const TextError = (props) => {
    return (
        <div className="text-sm text-rose-600">
            {props.children}
        </div>
    )
};

export default TextError;