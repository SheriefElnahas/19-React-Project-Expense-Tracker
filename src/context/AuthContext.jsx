import {createContext , useReducer} from 'react';

export const AuthContext = createContext();

export const authRedcer = (state,action ) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state, user: action.payload}
    default:
      return state
  }
}


export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authRedcer, {
    user:null
  })
  

  console.log(state.user)
  return (
    <AuthContext.Provider value={{...state, dispatch}} >
      {children}
    </AuthContext.Provider>
  )
}

