import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer.util";

export const MenuContext = createContext({
  isMenuOpen: true,
  setIsMenuOpen: () => null,
});

export const MENU_ACTION_TYPES = {
  SET_IS_MENU_OPEN: "SET_IS_MENU_OPEN",
};

const INTITAL_STATE = {
  isMenuOpen: true,
};

const menuReducer = (state, action) => {
  console.log("dispatched");
  console.log("action:", action);
  const { type, payload } = action;

  switch (type) {
    case MENU_ACTION_TYPES.SET_IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in menuReducer`);
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, INTITAL_STATE);
  const { isMenuOpen } = state;

  const setIsMenuOpen = (menuOpenBool) => {
    dispatch(createAction(MENU_ACTION_TYPES.SET_IS_MENU_OPEN, menuOpenBool));
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
