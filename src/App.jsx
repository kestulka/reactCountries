import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import getAllCountries from "./Services/api";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getAllCountries();
      setCountries(countries);
      setFilteredCountries(countries);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <Cards countries={filteredCountries} />
    </>
  );
}
export default App;
