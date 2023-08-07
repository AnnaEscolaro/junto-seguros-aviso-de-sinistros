import { InformationType } from "../../types";
import { ADD_INFORMATION } from "../actions/add-claim";
import { LIST_CLAIMS } from "../actions/list-claims";
import { DELETE_CLAIM } from "../actions/delete-claim";
import { EDIT_INFORMATION } from "../actions/edit-claim";
import { AnyAction } from "redux";

const INITIAL_STATE: InformationType[] = [];

const informationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_INFORMATION: {      
      return [...state, action.payload]
    }
    case DELETE_CLAIM: {
      return [...state]
    }
    case LIST_CLAIMS: {
      return [...state, ...action.payload]
    }
    case EDIT_INFORMATION:
      return [...state]

    default:
      return state;
  }
}

export default informationReducer;
