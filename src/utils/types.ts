export type SingleCocktailType = {
  image?: string;
  name: string;
  id?: string;
  info?: string;
  glass?: string;
  instructions?: any;
  instructionsIT: any;
  ingredients: any[];
  category: any;
};

export type SingleCoctktailFromApi = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
};
