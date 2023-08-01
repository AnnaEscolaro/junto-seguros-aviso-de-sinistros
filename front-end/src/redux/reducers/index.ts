import { InformationType } from "../../types";
import { ADD_INFORMATION, DELETE_INFORMATION } from "../actions";
import { AnyAction } from "redux";

const INITIAL_STATE: InformationType[] = [];

const informationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_INFORMATION: {      
      return [...state, action.payload]
    }
    case DELETE_INFORMATION: {
      return [...state, action.payload]
    }
    default:
      return state;
  }
}

export default informationReducer;
