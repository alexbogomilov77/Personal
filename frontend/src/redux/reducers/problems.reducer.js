const initialState = {
  problems: null
};

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROBLEMS":
      return { ...state, problems: action.payload };
    default:
      return state;
  }
};

export default problemsReducer;
