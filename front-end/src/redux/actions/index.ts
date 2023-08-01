import { InformationType } from '../../types';

export const ADD_INFORMATION = 'ADD_INFORMATION';
export const DELETE_INFORMATION = 'DELETE_INFORMATION';

export const addFormInformation = ({
  date,
  type,
  location: {
    address,
    number,
    district,
    city,
    stateLocal,
    country
  }
}: InformationType) => ({
  type: ADD_INFORMATION,
  payload: {
      date,
      type,
      location: {
        address,
        number,
        district,
        city,
        stateLocal,
        country
      }
    }
});

export const deleteFormInformation = ({
  date,
  type,
  location: {
    address,
    number,
    district,
    city,
    stateLocal,
    country
  }
}: InformationType) => ({
  type: DELETE_INFORMATION,
  payload: {
      date,
      type,
      location: {
        address,
        number,
        district,
        city,
        stateLocal,
        country
      }
    }
});