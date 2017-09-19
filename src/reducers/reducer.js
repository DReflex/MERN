
const stateInit = []
const todos = (state = stateInit, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
      case 'DELETE':
      const commentId = action.data;
      return state.filter(comment => comment.id !== commentId);

      default:
      return state
  }

}

export default todos
