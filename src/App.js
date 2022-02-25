import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Drink from "./pages/Drink";

const CocktailsContext = React.createContext();

function App() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [drinks, setDrinks] = useState([]);

  const fetchCocktails = async function () {
    const response = await fetch(url);
    const { drinks } = await response.json();

    setDrinks(drinks);
    console.log(drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <>
      <CocktailsContext.Provider value={{ drinks, setDrinks }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cocktail/:id" element={<Drink />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </CocktailsContext.Provider>
    </>
  );
}

export const GlobalContext = () => {
  return useContext(CocktailsContext);
};

export default App;
