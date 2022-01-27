import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import HeliForm from '../../components/HeliForm';
import helicopter from '../mockHeli';
import store from '../../redux/configureStore';

it('Helicopter form component renders correctly', () => {
  const tree = renderer
    .create(<Router>
      <Provider store={store}>
        <HeliForm helicopter={helicopter} />
      </Provider>
            </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
