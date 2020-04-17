import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tours: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOURS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
