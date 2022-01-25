import { baseAPI } from '../../logic/api';

const LOAD_RESERVATIONS = 'App/reservations/LOAD_RESERVATIONS';
const LOAD_RESERVATIONS_SUCCESS = 'App/reservations/LOAD_RESERVATIONS_SUCCESS';

const initialState = {
  reservations_arr: [],
  loading: true,
};

export const loadReservations = () => ({
  type: LOAD_RESERVATIONS,
});

export const loadReservationsSuccess = (payload) => ({
  type: LOAD_RESERVATIONS_SUCCESS,
  payload,
});

export const fetchReservations = () => async (dispatch) => {
  dispatch(loadReservations());
  const fetchedData = await fetch(`${baseAPI}api/v1/reservations`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: sessionStorage.getItem('token'),
    },
  });
  const result = await fetchedData.json();
  dispatch(loadReservationsSuccess(result));
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESERVATIONS:
      return {
        reservations_arr: [...state.reservations_arr],
        loading: true,
      };
    case LOAD_RESERVATIONS_SUCCESS:
      return {
        reservations_arr: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
