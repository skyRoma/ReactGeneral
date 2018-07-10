import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from '../Header/Header';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    handleMouseDown: jest.fn(),
    counter: 0,
  };
  const enzymeWrapper = mount(<AppHeader {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('AppHeader', () => {
    it('should render the component wrapper', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should render the correct h2 element', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.contains(<h2>Current Counter</h2>)).toBe(true);
    });

    it('should correct passed counter in props', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.props().counter).toBe(0);
    });

    it('sould correct render counter passed in props', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('span').text()).toBe('0');
    });

    it('onMouseDown event should call handleMouseDown() function passed in props', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('span').props().onMouseDown();
      expect(props.handleMouseDown.mock.calls.length).toBe(1);
    });
  });
});
