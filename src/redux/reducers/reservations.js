import { baseAPI } from '../../logic/api';
import { popup } from '../../logic/popup';

const LOAD_RESERVATIONS = 'App/reservations/LOAD_RESERVATIONS';
const LOAD_RESERVATIONS_SUCCESS = 'App/reservations/LOAD_RESERVATIONS_SUCCESS';
const ADD_RESERVATION = 'App/reservations/ADD_RESERVATIONS';

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

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
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

export const PostReservation = (start, end, helicopter) => async (dispatch) => {
  const payload = {
    helicopter,
    date_start: start,
    date_end: end,
  };

  await fetch(`${baseAPI}api/v1/reservations`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        reservation:
          {
            helicopter_id: helicopter.id,
            date_start: start,
            date_end: end,
          },
      }),
    }).then((response) => {
    if (response.status === 201) {
      popup('Reservation created', 'green');
    } else {
      popup("Couldn't create reservation", 'red');
    }
  });
  dispatch(addReservation(payload));
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
    case ADD_RESERVATION:
      return {
        reservations_arr: [...state.reservations_arr, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
