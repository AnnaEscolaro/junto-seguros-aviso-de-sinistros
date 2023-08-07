import { requestStarted, requestSuccessful, requestFailed } from '.';
import { DispatchType, InformationType } from '../../types';

export const DELETE_CLAIM = 'DELETE_CLAIM';

export const getClaimToDelete = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`http://localhost:3030/sinistro/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      dispatch(requestSuccessful(data));
      dispatch(deleteClaim(data));      
    } catch (error) {
      dispatch(requestFailed(error.message));
    }
  }
};

export const deleteClaim = (data: InformationType[]) => {
  return ({
    type: DELETE_CLAIM,
    payload: data,
  })
};

export default deleteClaim;
