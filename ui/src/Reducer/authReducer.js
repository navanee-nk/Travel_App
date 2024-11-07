const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "AUTH_MODAL_TOGGLE":
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen,
      };
    case "SET_LOGIN":
      return {
        ...state,
        selectedTab: "login",
      };
    case "SET_SIGNUP":
      return {
        ...state,
        selectedTab: "signup",
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        username: payload.username,
        accessToken: payload.accessToken,
      };
    case "CLEAR_AUTH":
      return {
        ...state,
        isAuthModalOpen: false,
        selectedTab: "login",
        username: "",
        accessToken: "",
      };
    default:
      return state;
  }
};

export default authReducer;
