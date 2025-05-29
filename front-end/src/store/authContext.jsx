import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: true
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, loading: false };
    case 'LOGOUT':
      return { user: null, loading: false };
    case 'AUTH_IS_READY':
      return { user: action.payload, loading: false };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({ type: 'AUTH_IS_READY', payload: user });
  }, []);

  console.log('AuthContextState:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
