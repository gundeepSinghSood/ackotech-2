import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import Button from '../Button';

const props = {
  secondary: 'true',
};

describe('Button', () => {
  let button = '';

  test('should render secondary correctly', () => {
    button = shallow(<Button {...props} />);
    expect(button).toMatchSnapshot();
  });

  test('should render correctly ', () => {
    button = shallow(<Button />);
    expect(button).toMatchSnapshot();
  });

  test('should render disabled', () => {
    button = shallow(<Button disabled>Submit</Button>);
    expect(button.find({ disabled: true })).toHaveLength(1);
  });
});
