import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import HeliDetails from '../../components/HeliDetails';
import helicopter from '../mockHeli';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';


it('Helicopter details component renders correctly', () => {
  const tree = renderer
    .create(<Router>
        <Provider store={store}>
            <HeliDetails helicopter={helicopter} />
        </Provider>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});