import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';

Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;
let props;

beforeEach(() => {
  props = {
    handleInputChange: jest.fn(),
    inputValue: '10',
    isError: false,
  };
  enzymeWrapper = mount(<BrowserRouter><Home {...props} /></BrowserRouter>);
});

describe('components', () => {
  describe('Home', () => {
    it('should render the component wrapper', () => {
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should render three Link element', () => {
      expect(enzymeWrapper.find('Link')).toHaveLength(3);
    });

    it('should render three buttons', () => {
      expect(enzymeWrapper.find('button').length).toEqual(3);
    });

    it('should render the LogoImg element', () => {
      expect(enzymeWrapper.containsMatchingElement(<figure />)).toBe(true);
    });
  });
});

