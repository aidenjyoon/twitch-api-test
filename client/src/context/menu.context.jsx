import { createContext, useReducer } from "react";

export const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => null,
});

export const MENU_ACTION_TYPES = {
  SET_IS_MENU_OPEN: "SET_IS_MENU_OPEN",
};

const INTITAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalNumberItems: 0,
  totalPrice: 0,
};

export const MenuProvider = ({ children }) => {
  const value = {
    isMenuOpen,
    setIsMenuOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
