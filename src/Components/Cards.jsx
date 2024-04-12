import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Center,
  Flex,
} from "@chakra-ui/react";

import getAllCountries from "../Services/api";
import MoreInfoModal from "./MoreInfoModal";

function Cards() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  // Modal funkcijos
  const handleOpenModal = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <Flex flexWrap="wrap" justifyContent="center">
          {countries && countries.length > 0 ? (
            countries.map((country, index) => (
              <Card
                key={index}
                mb={5}
                mr={5}
                bg="rgba(255, 255, 255, 0.6)"
                maxW="250px"
              >
                <CardHeader>
                  <Image src={country.flags.svg} />
                  <Heading size="md">{country.name.common}</Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing="3">
                    <Text>
                      <b>Continent: </b> <u>{country.region}</u>
                    </Text>
                    <Text>
                      <b>Capital: </b> <u>{country.capital}</u>
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter alignItems="center" justifyContent="center">
                  <ButtonGroup>
                    <Button
                      variant="solid"
                      colorScheme="purple"
                      onClick={() => handleOpenModal(country)}
                    >
                      More info
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))
          ) : (
            // jeigu countries array yra tuscias, renderinamas sitas divas:
            <div>countries not found!</div>
          )}
        </Flex>
      </div>
      <MoreInfoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        country={selectedCountry}
      />
    </>
  );
}

export default Cards;
