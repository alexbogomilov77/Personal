import axios from 'axios'

export const getParts = (value) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:8080/parts/`)
      .then( response => {
        console.log(response)
        dispatch({ type: 'SET_PARTS', response});
      }).catch((err) => {
        dispatch({ type: 'SET_PARTS_ERROR', err });
      });
  }
}