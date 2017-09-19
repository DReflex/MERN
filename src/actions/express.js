let expressID = 0;

export const addExpress = (text) =>{
    return{
    type: 'EXPRESS_TODO',
    id: expressID++,
    text
  }
  }
export const deleteExpress = (num) =>{
  return{
    type: 'EXPRESS_DELETE',
    data: num
  }
}
export const getExpress = (text) => {
  return {
    type: 'GET_EXPRESS',
    id: expressID++,
    text
  }
}
export const resetExpress = () => {
  expressID = 0
  return {type: 'RESET'}
}
