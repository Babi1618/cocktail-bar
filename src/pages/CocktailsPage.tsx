import { CocktailList } from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export const CocktailsPage = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};
