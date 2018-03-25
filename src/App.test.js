/* global it, expect, jest */

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { initialState } from './reducers/';

enzyme.configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(<App
    state={initialState}
    submitTodo={mockFunction}
    deleteTodo={mockFunction}
    todos={[]}
  />);

  expect(component.exists()).toEqual(true);
});
