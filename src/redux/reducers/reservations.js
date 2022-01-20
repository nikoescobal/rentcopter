const LOAD_RESERVATIONS = 'App/reservations/LOAD_RESERVATIONS';
const LOAD_RESERVATIONS_SUCCESS = 'App/reservations/LOAD_RESERVATIONS_SUCCESS';

const initialState = {
  reservations_arr: [
    {
      vip: 'Reshy',
      helicopter: 'Apache',
      date_start: '11/01/2022',
      date_end: '12/01/2022',
    },
    {
      vip: 'Nikolas',
      helicopter: 'Cessna',
      date_start: '15/01/2022',
      date_end: '17/01/2022',
    },
  ],
  loading: true,
};

export const loadReservations = () => ({
  type: LOAD_RESERVATIONS,
});

export const loadReservationsSuccess = (payload) => ({
  type: LOAD_RESERVATIONS_SUCCESS,
  payload,
});

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
