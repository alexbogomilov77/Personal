const initState = {
  listOfActions: '',
  error: ''
}

const getActions = (state = initState, action) => {
  switch (action.type) {
    case 'SET_ACTIONS':
      return {
        ...state,
        listOfActions: action.response.data
      }
    case 'SET_ACTIONS_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getActions;