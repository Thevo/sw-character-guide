import { ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE } from '@store/constants/actionsTypes';

export const setPersonToFavourite = (person) => {
    return {
        type: ADD_PERSON_TO_FAVOURITE,
        payload: person
    }
}
export const removePersonToFavourite = (personID) => {
    return {
        type: REMOVE_PERSON_FROM_FAVOURITE,
        payload: personID
    }
}