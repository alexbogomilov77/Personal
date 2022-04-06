const initialState = {
  selectedTab: 0,
  selectedCar: null,
  selectedFix: null,
  selectedProblem: null,
  selectedProblemDetail: null
};

const selectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_TAB":
      return { ...state, selectedTab: action.payload };
    case "SET_SELECTED_CAR":
      return { ...state, selectedCar: action.payload };
    case "SET_SELECTED_FIX":
      return { ...state, selectedFix: action.payload };
    case "SET_SELECTED_PROBLEM":
      return { ...state, selectedProblem: action.payload };
    case "SET_SELECTED_PROBLEM_DETAIL":
      return { ...state, selectedProblemDetail: action.payload };
    default:
      return state;
  }
};

export default selectedItemsReducer;
