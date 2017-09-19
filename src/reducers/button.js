const stateInit = {
  disable: false
}
export const button = (state = stateInit, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        disable: action.disable
      }
      default:
      return state


}
}
