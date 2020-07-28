import axios from 'axios'

export const getActions = (value) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:8080/actions/${value}`)
      .then( response => {
        console.log(response)
        dispatch({ type: 'SET_ACTIONS', response});
      }).catch((err) => {
        dispatch({ type: 'SET_ACTIONS_ERROR', err });
      });
  }
}