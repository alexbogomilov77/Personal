const initialState = {
  details: null
};

const problemsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, details: action.payload };
    default:
      return state;
  }
};

export default problemsDetailsReducer;
