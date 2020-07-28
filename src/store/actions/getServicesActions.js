import axios from 'axios'

export const getServices = (value) => {
  return (dispatch, getState) => {
    axios.get(`http://localhost:8080/services/${value}`)
      .then( response => {
        console.log(response)
        dispatch({ type: 'SET_SERVICES', response});
      }).catch((err) => {
        dispatch({ type: 'SET_SERVICES_ERROR', err });
      });
  }
}