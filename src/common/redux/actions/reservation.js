// reservationActions.js
// reservationTypes.js
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

  
  export const addReservation = (reservation) => ({
    type: ADD_RESERVATION,
    payload: reservation,
  });
  
  export const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    payload: reservationId,
  });
  
  export const fetchReservationsSuccess = (reservations) => ({
    type: FETCH_RESERVATIONS_SUCCESS,
    payload: reservations,
  });
  
  export const fetchReservationsFailure = (error) => ({
    type: FETCH_RESERVATIONS_FAILURE,
    payload: error,
  });
  