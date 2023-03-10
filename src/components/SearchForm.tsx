import React, { MutableRefObject, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext() as { setSearchTerm:any};
  const searchValue = useRef("") as MutableRefObject<any>;
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
    console.log(setSearchTerm(searchValue.current.value));
  }

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
