import axios from 'axios'

export const getRepairs = (value) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:8080/repairs/${value}`)
      .then( response => {
        dispatch({ type: 'SET_REPAIRS', response});
      }).catch((err) => {
        dispatch({ type: 'SET_REPAIRS_ERROR', err });
      });
  }
}