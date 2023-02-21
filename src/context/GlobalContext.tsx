import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import cartItems from "../utils/data";
import reducer from "../utils/reducer";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const url = "https://course-api.com/react-useReducer-cart-project";

  const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };
  
  const [state, dispatch] = useReducer(reducer, initialState) as any;
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAmount = (id: number, type: string) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
