// authActions.js
export const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
export const setUser = (name, role) => ({
  type: 'SET_USER',
  payload: {
    name,
    role,
  },
});

