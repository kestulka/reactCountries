import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import getAllCountries from "./Services/api";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getAllCountries();
      setCountries(countries);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header countries={countries} />
      <Cards />
    </>
  );
}
export default App;
