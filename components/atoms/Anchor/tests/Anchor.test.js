import Router from 'next/router';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { AnchorVanilla } from '../Anchor';

const propsWithAnimation = {
  to: '',
  hoverAnimation: true,
};

const propsWithForceClick = {
  to: '',
  forceClick: true,
};

const propsWithForceClickAndAnimation = {
  to: '',
  forceClick: true,
  hoverAnimation: true,
};

const noLinkWithHoverAnimation = {
  noLink: true,
  hoverAnimation: true,
};

jest.mock('next/link', () => ({ children }) => children);

describe('Anchor Component', () => {
  let anchor;

  test('should render correctly and match snapshot', () => {
    anchor = shallow(<AnchorVanilla to="/sample">Sample</AnchorVanilla>);
    expect(anchor).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    anchor = renderer.create(<AnchorVanilla to="/sample">Sample</AnchorVanilla>).toJSON();
    expect(anchor).toMatchSnapshot();
  });

  test('Should handle on typeahead focuson Events', () => {
    const mockedRouter = { push: () => {} };
    Router.router = mockedRouter;
    const props = { noLink: true, to: '/sample', handleLinkClick: jest.fn() };
    const event = { preventDefault: jest.fn() };
    anchor = shallow(<AnchorVanilla {...props}>Sample</AnchorVanilla>);
    anchor.find('a').simulate('click', event);
    // expect(props.handleLinkClick).toHaveBeenCalled();
  });

  test('test with hover animation', () => {
    anchor = shallow(<AnchorVanilla {...propsWithAnimation} />);
    expect(anchor).toMatchSnapshot();
  });

  test('test with force click', () => {
    anchor = shallow(<AnchorVanilla {...propsWithForceClick} />);
    expect(anchor).toMatchSnapshot();
  });

  test('test with force click and hover animation', () => {
    anchor = shallow(<AnchorVanilla {...propsWithForceClickAndAnimation} />);
    expect(anchor).toMatchSnapshot();
  });

  test('test with no link and hover animation', () => {
    anchor = shallow(<AnchorVanilla {...noLinkWithHoverAnimation} />);
    expect(anchor).toMatchSnapshot();
  });
});
