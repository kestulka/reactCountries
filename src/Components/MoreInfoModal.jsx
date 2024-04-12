import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";

const MoreInfoModal = ({ isOpen, onClose, country }) => {
  if (!country) return null; // ! BUTINAS LINE, kitaip nerenderins

  //TODO lines 17-29: reikalingas istraukti propercius is gilesniu sluoksniu, budas kopijuotas, bus koreguojamas
  const currencies = Object.values(country.currencies).map(
    (currency) => currency.name,
  );
  const languages = Object.values(country.languages);

  let neighboringCountries; // jei yra keli saliu kodai isskiria kableliais, jei ne, rodo: "none"
  if (!country.borders || country.borders.length === 0) {
    //! butina checkinti array pries tikrinant jo ilgi..
    neighboringCountries = "none";
  } else {
    neighboringCountries = country.borders.join(", ");
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="3xl">{country.name.common}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <b>Capital:</b> {country.capital}
          </Text>
          <Text>
            <b>Region:</b> {country.region}
          </Text>
          <Text>
            <b>Population:</b> {country.population}
          </Text>
          <Text>
            <b>Area:</b> {country.area}
          </Text>
          <Text>
            <b>Currency:</b> {currencies}
          </Text>
          <Text>
            <b>Language:</b> {languages}
          </Text>
          <Text>
            <b>Neighbors:</b> {neighboringCountries}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MoreInfoModal;
