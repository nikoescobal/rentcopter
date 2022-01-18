const LOAD_HELICOPTERS = 'App/helicopters/LOAD_HELICOPTERS';
const LOAD_HELICOPTERS_SUCCESS = 'App/helicopters/LOAD_HELICOPTERS_SUCCESS';

const initialState = {
  helicopters_arr: [
    {
      id: '1',
      name: 'Reshy',
      description: 'Proin vulputate, leo at viverra accumsan, dolor ipsum sodales ipsum, a vestibulum purus mauris at elit. Sed sed ante turpis. Mauris ornare in justo ut facilisis. Vestibulum elementum leo id dui laoreet, tempus iaculis nunc fringilla. Donec iaculis enim non vestibulum ullamcorper.',
      price_per_day: '200',
      img: 'https://www.xluxuo.com/wp-content/uploads/2020/10/Hill-Helicopters-HX50-1-scaled-1.jpg',
    },
    {
      id: '2',
      name: 'Nikolas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lacus odio. Suspendisse potenti. Aliquam elit est, egestas placerat pharetra a, convallis nec mauris.',
      price_per_day: '500',
      img: 'https://www.wheremilan.com/wp-content/uploads/2017/09/helitaly-1.jpg',
    },
    {
      id: '3',
      name: 'Ruben',
      description: 'Proin vulputate, leo at viverra accumsan, dolor ipsum sodales ipsum, a vestibulum purus mauris at elit. Sed sed ante turpis. Mauris ornare in justo ut facilisis. Vestibulum elementum leo id dui laoreet, tempus iaculis nunc fringilla. Donec iaculis enim non vestibulum ullamcorper.',
      price_per_day: '200',
      img: 'https://moneyinc.com/wp-content/uploads/2016/06/Airbus-H155-750x500.jpg',
    },
    {
      id: '4',
      name: 'Titus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lacus odio. Suspendisse potenti. Aliquam elit est, egestas placerat pharetra a, convallis nec mauris.',
      price_per_day: '2000',
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/AH64D_Longbow_Apache_-_Duxford_Autumn_Airshow_2010_%28modified%29.jpg',
    },
  ],
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
