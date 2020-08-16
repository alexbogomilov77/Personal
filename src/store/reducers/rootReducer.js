// const initState = {
//   listOfCars: [],
//   listHistory: [
//     {
//       id: '22.09.2019',
//       label: 'Cleaning DPF',
//       request: '',
//       diagnose: '',
//       service: '',
//       bill: ''
//     },
//     {
//       id: '23.09.2019',
//       label: 'Cleaning DPF'
//     },
//     {
//       id: '24.09.2019',
//       label: 'Cleaning DPF'
//     },
//     {
//       id: '25.09.2019',
//       label: 'Cleaning DPF'
//     },
//     {
//       id: '26.09.2019',
//       label: 'Cleaning DPF'
//     },
//   ]
// }

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'ADD_CAR':
//       return {
//         ...state,
//         listOfCars: [...state.listOfCars, action.value]
//       }
//     case 'DELETE_CAR':
//       return {
//         ...state,
//         commentsList: state.commentsList.filter((el => el.id !== action.id))
//       }
//     default:
//       return state;
//   }
// }

// export default rootReducer

import getCarsReducer from './getCarsReducer'
import getRepairsReducer from './getRepairsReducer'
import getServicesReducer from './getServicesReducer'
import getActionsReducer from './getActionsReducer'
import getPartsReducer from './getPartsReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  getCars: getCarsReducer,
  getRepairs: getRepairsReducer,
  getServices: getServicesReducer,
  getActions: getActionsReducer,
  getParts: getPartsReducer
});

export default rootReducer