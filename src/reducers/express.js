
const stateInit = []
const express = (state = stateInit, action) => {
  switch (action.type) {
    case 'EXPRESS_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
      case 'EXPRESS_DELETE':
      const commentId = action.data;
      return state.filter(comment => comment.id !== commentId);
      case 'GET_EXPRESS':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
          }
        ]
        case 'RESET':
        return state =[]
      default:
      return state
  }

}

export default express
