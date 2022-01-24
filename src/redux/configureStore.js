import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import helicoptersReducer from './reducers/helicopters';
import reservationsReducer from './reducers/reservations';

const rootReducer = combineReducers({
  helicopters: helicoptersReducer,
  reservations: reservationsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
