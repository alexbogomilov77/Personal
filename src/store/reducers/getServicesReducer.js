const initState = {
  listOfServices: '',
  error: ''
}

const getActions = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SERVICES':
      return {
        ...state,
        listOfServices: action.response.data
      }
    case 'SET_SERVICES':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getActions;