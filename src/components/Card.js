import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      w="full"
      rounded="md"
      borderColor="gray.200"
      overflow="hidden"
      spacing="4"
      alignItems="flex-start"
      boxShadow="md"
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} rounded="md" />
      <VStack alignItems="flex-start" spacing="0" px="4"
      >
        <Heading as="h4" size="md" color="black" pt="1">
          {title}
        </Heading>
        <Text color="gray.500" fontSize="sm" pt="2">
          {description}
        </Text>
      </VStack>
      <HStack justifyContent="flex-start" color="black" w="full" px="4" pb="2">
        <Text color="black" fontSize="sm" pt="2">
          See more<FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </HStack>
    </VStack>
  )
};

export default Card;
