import React, { useState } from "react";
import { Flex, Button, Input, InputGroup } from "@chakra-ui/react";

const Header = ({ countries, setFilteredCountries }) => {
  const handleContinentFilter = (continent) => {
    const filteredCountries = continent
      ? countries.filter((country) =>
          (country.continents || []).includes(continent),
        )
      : countries;
    setFilteredCountries(filteredCountries);
    console.log(filteredCountries);
  };

  // search bar

  const [query, setQuery] = useState("");

  const filterCountries = (value) => {
    // raides gali buti bet kur zodyje
    const regex = new RegExp([...value.toLowerCase()].join(".*"));
    return countries.filter((country) =>
      regex.test(country.name.common.toLowerCase()),
    );

    //! raides ima bendrai (pvz. ivedus "li" latvijos neranda)
    // return countries.filter((country) =>
    //   country.name.common.toLowerCase().includes(value.toLowerCase()),
    // );
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = filterCountries(value);
    setFilteredCountries(filtered);
  };

  return (
    <Flex
      position="fixed"
      w="100%"
      color="white"
      justifyContent="center"
      zIndex="1"
    >
      <div>
        <Button
          onClick={() => handleContinentFilter("")}
          colorScheme="teal"
          mr={4}
          mt={4}
        >
          All
        </Button>
        <Button
          onClick={() => handleContinentFilter("Asia")}
          colorScheme="pink"
          mr={4}
          mt={4}
        >
          Asia
        </Button>
        <Button
          onClick={() => handleContinentFilter("Europe")}
          colorScheme="purple"
          mr={4}
          mt={4}
        >
          Europe
        </Button>
        <Button
          onClick={() => handleContinentFilter("Africa")}
          colorScheme="green"
          mr={4}
          mt={4}
        >
          Africa
        </Button>
        <Button
          onClick={() => handleContinentFilter("Oceania")}
          colorScheme="orange"
          mr={4}
          mt={4}
        >
          Oceania
        </Button>
        <Button
          onClick={() => handleContinentFilter("North America")}
          colorScheme="blue"
          mr={4}
          mt={4}
        >
          North America
        </Button>
        <Button
          onClick={() => handleContinentFilter("Antarctica")}
          colorScheme="yellow"
          mr={4}
          mt={4}
        >
          Antarctica
        </Button>
        <Button
          onClick={() => handleContinentFilter("South America")}
          colorScheme="red"
          mr={4}
          mt={4}
        >
          South America
        </Button>
        <InputGroup>
          <Input
            placeholder="Search..."
            size="10px"
            width="15em"
            border="1px"
            borderColor="white"
            mt={4}
            value={query}
            onChange={handleInputChange}
          />
        </InputGroup>
      </div>
    </Flex>
  );
};

export default Header;
