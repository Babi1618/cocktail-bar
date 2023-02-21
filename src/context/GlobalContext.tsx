import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
export const GlobalContext = createContext({});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchAllCocktails = async () => {
    const res = await fetch(`${url}${searchTerm}`);
    const data = await res.json();
    const { drinks } = data;
    if (drinks) {
      setCocktails(drinks);
    } else {
      setCocktails([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAllCocktails();
  }, [searchTerm]);
  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        cocktails,
        setCocktails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
