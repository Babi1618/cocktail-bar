import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from "react";
  export const AppContext = createContext({});
  
  export const AppContextProvider = (props: PropsWithChildren) => {
    const [isMobile, setIsMobile] = useState(false);
    // const [page, setPage] = useState(1);
  
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
          isMobile,
        //   page,
        //   setPage,
        }}
      >
        {props.children}
      </AppContext.Provider>
    );
  };
  export const useAppContext = () => {
    return useContext(AppContext);
  };
  