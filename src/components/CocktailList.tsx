import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Loading from "./Loading";
import SingleCocktail, { SingleCocktailType } from "../stories/components/SingleCocktail";

export const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext() as any;

  useEffect(() => {
    // console.log("prova", cocktails);
  }, [cocktails]);

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
        {cocktails.map((el: any) => {
          return <SingleCocktail key={el.id} {...el} />;
        })}
      </div>
    </section>
  );
};
