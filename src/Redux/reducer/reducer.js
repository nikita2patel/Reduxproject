const istate = {
    data:[]
}

const reducer = (state = istate,action) =>{
  
    switch(action.type){
      
      case "get_data":
        
        return {
          ...state,
          data:action.payload
        }
        break;
        default:
          return state
    }
  }



export default reducer;



