import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../utils/reducer";
export const AppContext = createContext({});

export const AppContextProvider = (props: PropsWithChildren) => {
  const [isMobile, setIsMobile] = useState(false);
  const initialState = {
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState) as any;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        isMobile,
        ...state,
        increase,
        decrease,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
