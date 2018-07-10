import reducer from './index';
import * as actionTypes from '../actions/actions';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        counter: 0,
      }
    );
  });

  it('should handle INCREMENT', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.INCREMENT,
      })
    ).toEqual(
      {
        counter: 1,
      }
    );
  });

  it('should handle DECREMENT', () => {
    expect(
      reducer(
        {
          counter: 1,
        },
        {
          type: actionTypes.DECREMENT,
        }
      )
    ).toEqual(
      {
        counter: 0,
      }
    );
  });

  it('should handle ADD_VALUE', () => {
    expect(
      reducer(
        {
          counter: 2,
        },
        {
          type: actionTypes.ADD_VALUE,
          value: 10,
        }
      )
    ).toEqual(
      {
        counter: 12,
      }
    );
  });

  it('should handle SUBSTRACT_VALUE', () => {
    expect(
      reducer(
        {
          counter: 12,
        },
        {
          type: actionTypes.SUBSTRACT_VALUE,
          value: 100,
        }
      )
    ).toEqual(
      {
        counter: -88,
      }
    );
  });

  it('should handle REMOVE', () => {
    expect(
      reducer(
        {
          counter: 8,
        },
        {
          type: actionTypes.REMOVE,
        }
      )
    ).toEqual(
      {
        counter: 0,
      }
    );
  });

  it('should handle RECEIVE', () => {
    expect(
      reducer(
        {
          counter: 12,
        },
        {
          type: actionTypes.RECEIVE,
          value: 56,
        }
      )
    ).toEqual(
      {
        counter: 56,
      }
    );
  });
});
