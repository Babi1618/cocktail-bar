export type SingleCocktailType = {
  image?: string;
  name: string;
  id: string;
  info?: string;
  glass?: string;
};

export type SingleCoctktailFromApi = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
};
