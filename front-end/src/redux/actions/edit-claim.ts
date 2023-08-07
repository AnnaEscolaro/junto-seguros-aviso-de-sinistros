import { requestStarted, requestSuccessful, requestFailed } from '.';
import { InformationType } from '../../types';
import { DispatchType } from '../../types';

export const EDIT_INFORMATION = 'EDIT_INFORMATION';

export const claimToEdit = (id: InformationType) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`http://localhost:3030/sinistro/${id}`, {
        method: "PUT",
      });
      const data = await response.json();
      dispatch(requestSuccessful(data));
      dispatch(editClaim(data));
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  };
};

export const editClaim = (claimData: InformationType) => {
  return ({
    type: EDIT_INFORMATION,
    payload: claimData,
  })
};


