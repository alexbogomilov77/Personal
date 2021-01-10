import axios from 'axios'

export const getCars = (value) => {
  return (dispatch, getState) => {
    axios.get('http://localhost:8080/cars')
      .then( response => {
        const selectedTab = Number(localStorage.getItem('sidebarTab'))
        const carsInSelectedTab = response.data.filter(el => el.state === selectedTab)
        dispatch({ type: 'SET_CARS', carsInSelectedTab})
      }).catch((err) => {
        dispatch({ type: 'SET_CARS_ERROR', err })
      })
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