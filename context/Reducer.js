const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    case "OPEN_MODAL":
      return {
        ...state,
        modal: true
      }
    case "CLOSE_MODAL":
      return {
       ...state,
       modal: false
    }
    case "ADD_QUERY":
      return {
        ...state,
        query: action.payload
      }
    default: 
      return state;
  }
};

export default Reducer;

