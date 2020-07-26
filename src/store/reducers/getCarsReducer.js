const initState = {
  listOfCars: '',
  error: ''
}

const getCarsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        listOfCars: action.response.data
      }
    case 'SET_CARS_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getCarsReducer;