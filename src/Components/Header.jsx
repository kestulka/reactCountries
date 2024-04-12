import React, { useState } from "react";
import { Flex, Button, Input, InputGroup } from "@chakra-ui/react";

const Header = ({ countries }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const filterCountriesByRegion = (countries, selectedRegion) => {
    if (!selectedRegion) {
      return;
    }
    return countries.filter((country) => country.region === selectedRegion);
  };

  const filterAndUpdate = (region) => {
    const filteredCountries = filterCountriesByRegion(countries, region);
    console.log(filteredCountries);
  };

  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
    filterAndUpdate(region);
  };

  return (
    <Flex position="fixed" w="100%" zIndex="1" justifyContent="center">
      <div>
        <Button
          onClick={() => handleRegionFilter(null)}
          colorScheme="teal"
          mr={4}
          mt={4}
        >
          All
        </Button>
        <Button
          onClick={() => handleRegionFilter("Asia")}
          colorScheme="pink"
          mr={4}
          mt={4}
        >
          Asia
        </Button>
        <Button colorScheme="purple" mr={4} mt={4}>
          Europe
        </Button>
        <Button colorScheme="green" mr={4} mt={4}>
          Africa
        </Button>
        <Button colorScheme="orange" mr={4} mt={4}>
          Oceania
        </Button>
        <Button colorScheme="blue" mr={4} mt={4}>
          North America
        </Button>
        <Button colorScheme="yellow" mr={4} mt={4}>
          Antarctica
        </Button>
        <Button colorScheme="red" mr={4} mt={4}>
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
            mb={8}
          />
        </InputGroup>
      </div>
    </Flex>
  );
};

export default Header;
