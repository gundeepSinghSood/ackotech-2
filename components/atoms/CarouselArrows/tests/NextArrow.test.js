import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { NextArrowVanilla } from '../NextArrow';

const props = {
  onClick: jest.fn(),
  className: 'arrow',
};
const openNavSpy = jest.fn();

describe('<NextArrow />', () => {
  let Component = '';
  beforeEach(() => {
    Component = shallow(<NextArrowVanilla {...props} />);
  });

  test('should render correctly', () => {
    expect(Component).toMatchSnapshot();
  });

  test('should render correctly', () => {
    Component = shallow(<NextArrowVanilla onClick={openNavSpy} />);
    expect(Component).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    Component = renderer.create(<NextArrowVanilla />).toJSON();
    expect(Component).toMatchSnapshot();
  });
});
