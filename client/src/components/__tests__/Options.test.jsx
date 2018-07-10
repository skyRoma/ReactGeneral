import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Options from '../Options/Options';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    increment: jest.fn(),
    decrement: jest.fn(),
    add: jest.fn(),
    substract: jest.fn(),
  };
  const enzymeWrapper = mount(<Options {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('Options', () => {
    it('Correct render text of Options', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#btn1').children().text()).toBe('Increment');
      expect(enzymeWrapper.find('button.btn2').text()).toBe('Decrement');
      expect(enzymeWrapper.find('button.btn3').text()).toBe('Add');
      expect(enzymeWrapper.find('button.btn4').text()).toBe('Substract');
    });

    it('should call increment() if click INCREMENT button', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('#btn1').children().props().onClick();
      expect(props.increment.mock.calls.length).toBe(1);
    })

    it('should call decrement() if click DECREMENT button', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('button.btn2').props().onClick();
      expect(props.decrement.mock.calls.length).toBe(1);
    })

    it('click "Add" button should change addInputValue, addButtonDisabled, addError of the state', () => {
      const { enzymeWrapper } = setup();
      enzymeWrapper.setState({
        addInputValue: '100',
        addButtonDisabled: false,
        addError: true,
      });
      enzymeWrapper.find('button.btn3').simulate('click');
      expect(enzymeWrapper.state().addInputValue).toEqual('');
      expect(enzymeWrapper.state().addButtonDisabled).toEqual(true);
      expect(enzymeWrapper.state().addError).toEqual(false);
    });

    it('click "Add" button should call add() function passed in props', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('button.btn3').props().onClick();
      expect(props.add.mock.calls.length).toBe(1);
    });

    it('click "Substract" button should change subInputValue, subButtonDisabled, subError of the state', () => {
      const { enzymeWrapper } = setup();
      enzymeWrapper.setState({
        subInputValue: '100',
        subButtonDisabled: false,
        subError: true,
      });
      enzymeWrapper.find('button.btn4').simulate('click');
      expect(enzymeWrapper.state().subInputValue).toEqual('');
      expect(enzymeWrapper.state().subButtonDisabled).toEqual(true);
      expect(enzymeWrapper.state().subError).toEqual(false);
    });

    it('click "Substract" button should call substract() function passed in props', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('button.btn4').props().onClick();
      expect(props.substract.mock.calls.length).toBe(1);
    });
  });
});
