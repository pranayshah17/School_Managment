// src/reducers/authReducer.ts

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
