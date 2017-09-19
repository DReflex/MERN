let nextTodoId = 0;


export const addTodo = (text) =>{
    return{
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
  }
export const Delete = (num) =>{
  return{
    type: 'DELETE',
    data: num
  }
}
