const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_MODAL":
      return { ...state, isSearchModal: !state.isSearchModal };
    case "CHECK_IN":
      return { ...state, checkin: payload };
    case "CHECK_OUT":
      return { ...state, checkout: payload };
    case "DESTINATION":
      return {
        ...state,
        destination: payload,
      };
    case "GUESTS":
      return { ...state, guests: payload };
    case "SEARCH_RESULT":
      return { ...state, isSearchResultOpen: true };
    case "OTHER_FOCUS":
      return { ...state, isSearchResultOpen: false };
    case "CLOSE":
      return { ...state, isSearchModal: !state.isSearchModal };
    default:
      return state;
  }
};

export default dateReducer;
