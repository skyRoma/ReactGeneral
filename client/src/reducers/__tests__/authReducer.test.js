import reducer from '../authReducer';
import * as actionTypes from '../../actions/auth';

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        successMessage: '',
      }
    );
  });

  it('should handle ADD_SUCCESS_MSG', () => {
    expect(
      reducer(
        {
          successMessage: '',
        },
        {
          type: actionTypes.ADD_SUCCESS_MSG,
          value: 'Hello, my friend!',
        }
      )
    ).toEqual(
      {
        successMessage: 'Hello, my friend!',
      }
    );
  });

  it('should handle ADD_SUCCESS_MSG', () => {
    expect(
      reducer(
        {
          successMessage: 'Hello, my friend!',
        },
        {
          type: actionTypes.REMOVE_SUCCESS_MSG,
        }
      )
    ).toEqual(
      {
        successMessage: '',
      }
    );
  });
});
