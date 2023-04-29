import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const Context = createContext(null);

const initialState = {
  items: [],
  modal: false,
  query: ""
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToFavorites = (item) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: item });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  }

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  }

  const addQuery = (query) => {
    dispatch({ type: "ADD_QUERY", payload: query });
  }

  const value = {
    addToFavorites,
    removeFromFavorites,
    openModal,
    closeModal,
    addQuery,
    query: state.query,
    items: state.items,
    modal: state.modal,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
