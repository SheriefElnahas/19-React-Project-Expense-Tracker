import { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // This will fire once when first communicate with firebase to check if we have a user or not ,
  // and also everytime there is a change in the autentication ( user login/logou)
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({
        type: 'AUTH_IS_READY',
        payload: user,
      });
    });
    return () => unsub();
  }, []);
  console.log('AuthContext State', state);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
