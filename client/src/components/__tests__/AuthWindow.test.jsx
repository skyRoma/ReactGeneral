import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import AuthWindow from '../AuthWindow/AuthWindow';

Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;
let props;

beforeEach(() => {
  props = {
    addSucessMsg: jest.fn(),
    removeSucessMsg: jest.fn(),
    successMessage: 'You have successfully signed up!',
    location: {
      pathname: '/join',
      state: {
        from: {
          pathname: 'home',
        },
      },
    },
  };
  enzymeWrapper = mount(<BrowserRouter><AuthWindow {...props} /></BrowserRouter>);
});


describe('components', () => {
  describe('AuthWindow', () => {
    it('should render the component wrapper', () => {
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should render the UserImg element', () => {
      expect(enzymeWrapper.containsMatchingElement(<figure />)).toBe(true);
    });

    it('should render two AuthInput components', () => {
      expect(enzymeWrapper.find('AuthInput')).toHaveLength(2);
    });

    it('should render the button of the component', () => {
      expect(enzymeWrapper.find('button').length).toEqual(1);
    });

    it('should render the 2 paragraph of the component', () => {
      expect(enzymeWrapper.find('p').length).toEqual(2);
    });

    it('should render correct text if the path is /join', () => {
      expect(enzymeWrapper.contains('Already have an account? ')).toBe(true);
    });
  });
});
