export const addCommentAction = (text) => {
  return {
    type: 'ADD_CAR',
    text
  }
}

export const deleteCommentAction = (id) => {
  return {
    type: 'DELETE_CAR',
    id
  }
}