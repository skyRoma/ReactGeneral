import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../Main/Main';

Enzyme.configure({ adapter: new Adapter() });

let enzymeWrapper;
let props;

beforeEach(() => {
  props = {
    fetchData: jest.fn(),
    counter: 0,
    authCheck: jest.fn(() => Promise.resolve({ status: 200 })),
    dropRemove: jest.fn(),
    isUserAuthenticated: true,
    history: {},
  };
  enzymeWrapper = shallow(<Main {...props} />);
  enzymeWrapper.setState({
    isLoading: false,
  });
});


describe('components', () => {
  describe('Main', () => {
    it('should render one <AppHeader /> component', () => {
      expect(enzymeWrapper.find('AppHeader')).toHaveLength(1);
    });

    it('should render the RecycleBin element', () => {
      expect(enzymeWrapper.find('.droppableRemove')).toHaveLength(1);
    });

    it('should render the Save element', () => {
      expect(enzymeWrapper.find('.droppableSave').length).toEqual(1);
    });

    it('should render the LogOutBtn', () => {;
      expect(enzymeWrapper.find('LogOutBtn').length).toEqual(1);
    });

    it('should render the DropContainer element', () => {
      expect(enzymeWrapper.find('DropContainer').length).toEqual(1);
    });

    it('should render the Loader element if this.state.isLoading=true', () => {
      enzymeWrapper.setState({
        isLoading: true,
      });
      expect(enzymeWrapper.find('Loader').length).toEqual(1);
    });

    it('shouldn\'t render the AppWrapper element if this.props.isUserAuthenticated !== true', () => {
      enzymeWrapper.setProps({
        isUserAuthenticated: false,
      });
      expect(enzymeWrapper.find('AppWrapper').length).toEqual(0);
    });
  });
});

