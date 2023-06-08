const initialState = {
    count: 0, 
    todos: [
      'Купить хлеб',
      'Продать хлеб',
      'Обменять хлеб'
    ]
  }
  
  export const mainReducer = (state= initialState, action) => {
    switch (action.type) {
      case 'INCREMENT': 
      return { ...state, count: state.count + 1 }
  
      case 'DECREMENT': 
      return { ...state, count: state.count - 1 }
      
  
      case 'ADD_TODOS': 
      return {...state, todos:[...state.todos, action.payload]}
  
  
      case 'DELETE_LAST_TODOS':
        return {...state, todos:[...state.todos.slice(0, state.todos.length -1)]}
        
       
    
      default:
       return state
    }
  }