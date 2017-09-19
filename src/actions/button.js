let disable = false;

export const changeButton = () =>{
    disable = !disable
    return{
    type: 'CHANGE',
    disable: disable
  }
  }
