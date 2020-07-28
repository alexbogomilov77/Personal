const initState = {
  listOfRepairs: '',
  error: ''
}

const getRepairs = (state = initState, action) => {
  switch (action.type) {
    case 'SET_REPAIRS':
      return {
        ...state,
        listOfRepairs: action.response.data
      }
    case 'SET_REPAIRS_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getRepairs;