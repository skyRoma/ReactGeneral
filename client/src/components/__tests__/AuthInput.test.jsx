import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthInput from '../AuthInput/AuthInput';

Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;
let props;

beforeEach(() => {
  props = {
    name: 'email',
    placeholder: 'enter your email',
    handleChange: jest.fn(),
  };
  enzymeWrapper = mount(<AuthInput {...props} />);
});

describe('components', () => {
  describe('AuthInput', () => {
    it('should render the component wrapper', () => {
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should render the input of the component', () => {
      expect(enzymeWrapper.find('input').length).toEqual(1);
    });

    it('should render the ErroMsg of the component', () => {
      expect(enzymeWrapper.find('div').length).toEqual(1);
    });

    it('should correct passed name in props', () => {
      expect(enzymeWrapper.props().name).toBe('email');
    });

    it('should correct passed placeholder in props', () => {
      expect(enzymeWrapper.props().placeholder).toBe('enter your email');
    });

    it('should embed the default value if no value is passed in isError prop', () => {
      expect(enzymeWrapper.props().isError).toBe('');
    });

    it('should embed the default value if no value is passed in type prop', () => {
      expect(enzymeWrapper.props().type).toBe('text');
    });

    it('should embed the default value if no value is passed in type prop', () => {
      expect(enzymeWrapper.props().type).toBe('text');
    });

    it('input changes should call handleChange() function passed in props', () => {
      enzymeWrapper.find('input[onChange]').props().onChange();
      expect(props.handleChange.mock.calls.length).toBe(1);
    });
  });
});

