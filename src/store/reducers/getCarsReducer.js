const initState = {
  listOfCars: []
}

const getCarsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {
        ...state,
        listOfCars: [...state.listOfCars, action.response.data]
      }
    case 'DELETE_CAR':
      return {
        ...state,
        commentsList: state.commentsList.filter((el => el.id !== action.id))
      }
    default:
      return state;
  }
};

export default getCarsReducer;