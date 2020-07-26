const initState = {
  listOfServices: '',
  error: ''
}

const getServices = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SERVICES':
      return {
        ...state,
        listOfServices: action.response.data
      }
    case 'SET_SERVICES_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
};

export default getServices;