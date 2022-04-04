const initialState = {
  fixes: null
};

const fixesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIXES":
      return { ...state, fixes: action.payload };
    default:
      return state;
  }
};

export default fixesReducer;
