const initState = {
  listCars: [
    {
      id: 'BH7737AB',
      make: 'Honda',
      model: 'Accord'
    },
    {
      id: 'BH2492BT',
      make: 'Opel',
      model: 'Insignia'
    }
  ],
  listHistory: [
    {
      id: '22.09.2019',
      label: 'Cleaning DPF',
      request: '',
      diagnose: '',
      service: '',
      bill: ''
    },
    {
      id: '23.09.2019',
      label: 'Cleaning DPF'
    },
    {
      id: '24.09.2019',
      label: 'Cleaning DPF'
    },
    {
      id: '25.09.2019',
      label: 'Cleaning DPF'
    },
    {
      id: '26.09.2019',
      label: 'Cleaning DPF'
    },
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        ...state,
        commentsList: [...state.commentsList, action.text].sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()).reverse()
      }
    case 'DELETE_CAR':
      return {
        ...state,
        commentsList: state.commentsList.filter((el => el.id !== action.id))
      }
    default:
      return state;
  }
}

export default rootReducer