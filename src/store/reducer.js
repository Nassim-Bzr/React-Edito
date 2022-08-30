const initialState = {
  isSmall: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_ISSMALL':
      return {
        ...state,
        isSmall: action.payload,

      };
    default:
      return state;
  }
}

export default reducer;
