import React from "react";
import { Link } from "react-router-dom";
import { SingleCocktailType } from "../../utils/types";

export default function SingleCocktail({
  image,
  name,
  id,
  info,
  glass,
}: SingleCocktailType) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <div>
          <h3>{name}</h3>
        </div>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}

// export type SingleCocktailType = {
//   image?: string;
//   name: string;
//   id: string;
//   info?: string;
//   glass?: string;
// };
