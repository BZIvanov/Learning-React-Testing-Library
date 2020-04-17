import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  username: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        username: action.username,
      };
    default:
      return state;
  }
};

export default reducer;
