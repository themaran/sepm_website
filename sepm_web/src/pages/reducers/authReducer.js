const initialState = {
    isLoggedIn: false,
    loading: false,
    error: null,
    name: '',
    role: ''
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          loading: false,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
        };
      case 'SET_USER':
        return {
          ...state,
          name: action.payload.name,
          role: action.payload.role,
        }
      default:
        return state;
    }
  };
  
  export default authReducer;
  