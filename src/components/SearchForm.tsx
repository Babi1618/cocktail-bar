import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext() as any;
  const searchValue = useRef("") as any;

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("ev", e);
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
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
