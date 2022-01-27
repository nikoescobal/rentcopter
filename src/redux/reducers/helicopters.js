import { baseAPI } from '../../logic/api';

const LOAD_HELICOPTERS = 'App/helicopters/LOAD_HELICOPTERS';
const LOAD_HELICOPTERS_SUCCESS = 'App/helicopters/LOAD_HELICOPTERS_SUCCESS';

const initialState = {
  helicopters_arr: [],
  loading: true,
};

export const loadHelicopters = () => ({
  type: LOAD_HELICOPTERS,
});

export const loadHelicoptersSuccess = (payload) => ({
  type: LOAD_HELICOPTERS_SUCCESS,
  payload,
});

export const fetchHelicopters = () => async (dispatch) => {
  dispatch(loadHelicopters());
  const fetchedData = await fetch(`${baseAPI}api/v1/helicopters`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: sessionStorage.getItem('token'),
    },
  });
  const result = await fetchedData.json();
  dispatch(loadHelicoptersSuccess(result));
};

const helicoptersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HELICOPTERS:
      return {
        helicopters_arr: [...state.helicopters_arr],
        loading: true,
      };
    case LOAD_HELICOPTERS_SUCCESS:
      return {
        helicopters_arr: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default helicoptersReducer;
