import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

import Cocktail from "./Cocktail";

const Cocktails = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const { drinks } = GlobalContext();

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((drink) => {
          return <Cocktail key={drink.idDrink} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
