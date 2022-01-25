import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import HeliCard from '../../components/HeliCard';
import helicopter from '../mockHeli';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';


it('Helicopter card component renders correctly', () => {
  const tree = renderer
    .create(<Router>
        <Provider store={store}>
            <HeliCard helicopter={helicopter} />
        </Provider>
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});