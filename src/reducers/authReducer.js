const initialState = {
    isAuthenticated: false,
    loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_USER':
      case 'REGISTER_USER':
        return {
            ...state,
            isAuthenticated: true,
            loading: false,
        }
      case 'LOGOUT_USER':
          return {
              ...state,
              isAuthenticated: false,
              loading: false
          }
      case 'LOAD_USER':
          return {
              ...state,
              loading: false
          }
    default:
      return state;
  }
};

export default authReducer;