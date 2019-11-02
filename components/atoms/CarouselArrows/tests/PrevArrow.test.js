import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { PrevArrowVanilla } from '../PrevArrow';

const props = {
  onClick: jest.fn(),
  className: 'arrow',
};

describe('<PrevArrow />', () => {
  let Component = '';
  beforeEach(() => {
    Component = shallow(<PrevArrowVanilla {...props} />);
  });

  test('should render correctly', () => {
    expect(Component).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    Component = renderer.create(<PrevArrowVanilla />).toJSON();
    expect(Component).toMatchSnapshot();
  });
});
