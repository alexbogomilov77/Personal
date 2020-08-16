const initState = {
  listOfParts: '',
  error: ''
}

const getParts = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PARTS':
      return {
        ...state,
        listOfParts: action.response.data
      }
    case 'SET_PARTS_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getParts;