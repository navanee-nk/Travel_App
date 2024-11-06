const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_MODAL":
      return { ...state, isSearchModal: !state.isSearchModal };
    case "CHECK_IN":
      return { ...state, checkin: payload };
    case "CHECK_OUT":
      return { ...state, checkout: payload };
    default:
      return state;
  }
};

export default dateReducer;
