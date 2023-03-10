import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Loading from "./Loading";
import SingleCocktail from "../stories/components/SingleCocktail";
import { SingleCocktailType } from "../utils/types";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext() as {
    cocktails: SingleCocktailType[];
    loading: boolean;
  };

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return <h2 className="section-title">No cocktail matched</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((el: SingleCocktailType) => {
          return <SingleCocktail key={el.id} {...el} />;
        })}
      </div>
    </section>
  );
};
