/*This code is responsible for defining the validation schema rules for a form used in the flashcard creation process. 
These rules are defined using the Yup library and ensure that the user provides inputs in the correct format*/
import * as Yup from "yup";

const FlashCardSchema = Yup.object().shape({
    groupid: Yup.string(),
    groupname: Yup.string()
    .max(20, "Cannot exceed 20 characters")
    .min(5,"Must have a minimum length of 5 characters")
    .required("Please Enter Group Name...!"),

    groupdescription: Yup.string()
    .max(300,"The group description needs to be limited to 300 characters or less."),


    groupimg: Yup.mixed(),

    cards: Yup.array().of(
        Yup.object().shape({
            cardid: Yup.string(),
            cardname: Yup.string()
            .max(20, "Cannot exceed 20 characters")
            .min(5,"Must have a minimum length of 5 characters")
            .required("Input Required..!"),

            carddescription: Yup.string()
            .max(300, "Cannot exceed 300 characters")
            .min(20,"Must have a minimum length of 20 characters")
            .required("Input Required..!"),
        })
    ),
    createdOn: Yup.date().default(() => new Date()),

});

export default FlashCardSchema;