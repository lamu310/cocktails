import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalContext } from "../App";

const Drink = () => {
  const [drink, setDrink] = useState([]);
  const [hasDrink, setHasDrink] = useState(false);
  const { drinks } = GlobalContext();

  const id = useParams().id;

  useEffect(() => {
    const drink = drinks.find((drink) => drink.idDrink == id);
    setDrink(drink);

    if (drink) setHasDrink(true);
  }, []);

  if (!hasDrink) {
    return <h1 className="section-title">no cocktail to display</h1>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>

      <h2 className="section-title">{drink.strDrink}</h2>
      <div className="drink">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {drink.strDrink}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {drink.strCategory}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {drink.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {drink.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {drink.strInstructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {Object.getOwnPropertyNames(drink).map((p) => {
              if (p.includes("strIngredient")) {
                return drink[p] != null ? drink[p] + " " : "";
              }
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Drink;
