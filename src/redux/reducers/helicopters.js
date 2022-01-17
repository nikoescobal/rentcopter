const LOAD_HELICOPTERS = 'App/helicopters/LOAD_HELICOPTERS';
const LOAD_HELICOPTERS_SUCCESS = 'App/helicopters/LOAD_HELICOPTERS_SUCCESS';

const initialState = {
  helicopters_arr: ['Cobra', 'Apache', 'Ventura'],
  loading: true,
};

export const loadHelicopters = () => ({
  type: LOAD_HELICOPTERS,
});

export const loadHelicoptersSuccess = (payload) => ({
  type: LOAD_HELICOPTERS_SUCCESS,
  payload,
});

const helicoptersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HELICOPTERS:
      return {
        reservations_arr: [...state.reservations_arr],
        loading: true,
      };
    case LOAD_HELICOPTERS_SUCCESS:
      return {
        reservations_arr: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default helicoptersReducer;
