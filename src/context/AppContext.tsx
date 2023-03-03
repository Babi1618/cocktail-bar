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

  return (
    <AppContext.Provider
      value={{
        isMobile
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
