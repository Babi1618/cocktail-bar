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

  const fetchData = async (url: string) => {
    const res = await fetch(`${url}${searchTerm}`).then((res) => res.json());
    return res;
  };
  
  const getDrinks = async (url: string) => {
    const { drinks } = await fetchData(url);
    if (drinks) {
      const newCocktails = drinks.map((item: any) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setCocktails(newCocktails);
    } else {
      setCocktails([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDrinks(url);
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
