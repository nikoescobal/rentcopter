const LOAD_RESERVATIONS = 'App/reservations/LOAD_RESERVATIONS';
const LOAD_RESERVATIONS_SUCCESS = 'App/reservations/LOAD_RESERVATIONS_SUCCESS';

const initialState = {
  reservations_arr: [
    {
      VIP: 'Reshy',
      helicopter: 'Apache',
      date: 'today',
    },
    {
      VIP: 'Nikolas',
      helicopter: 'Apache',
      date: 'tomorrow',
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
