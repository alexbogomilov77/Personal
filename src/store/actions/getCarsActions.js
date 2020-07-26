import axios from 'axios'

export const getCars = (value) => {
  return (dispatch, getState) => {
    axios.get('http://localhost:8080/cars')
      .then( response => {
        console.log(response.data)
        dispatch({ type: 'SET_CARS', response});
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  }
}

// export const addCarsAction = (value) => {
//   return {
//     type: 'ADD_CAR',
//     value
//   }
// }

// export const deleteCommentAction = (id) => {
//   return {
//     type: 'DELETE_CAR',
//     id
//   }
// }