import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Main from '../Main/Main';

const initialState = { counter: 0 };
const mockStore = configureStore();
let store;

beforeAll(() => {
  store = mockStore(initialState);
});

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    drop: jest.fn(),
    fetchData: jest.fn(),
  };
  const enzymeWrapper = mount(<Provider store={store}><Main {...props} /></Provider>);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Main', () => {
    it('should render one <AppHeader /> component', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('AppHeader')).toHaveLength(1);
    });

    it('should render one <Options /> component', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('Options')).toHaveLength(1);
    });

    it('should render the RecycleBin element', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.containsMatchingElement(<figure />)).toBe(true);
      //other way:
      expect(enzymeWrapper.find('figure.droppableRemove').length).toEqual(1);
    });

    it('should render the Save element', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.containsMatchingElement(<figure />)).toBe(true);
      //other way:
      expect(enzymeWrapper.find('figure.droppableSave').length).toEqual(1);
    });

    it('componentDidMount should call fetchData() function', () => {
      const { props } = setup();
      expect(props.fetchData.mock.calls.length).toBe(1);
    });
  });
});

