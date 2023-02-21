import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Loading from "./Loading";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext() as any;

  useEffect(()=>{
    console.log("prova", cocktails)
  },[cocktails])
  
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return <h2 className="section-title">No cocktail matched</h2>;
  }
  return <div>List</div>;
};
