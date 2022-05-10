import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const FurtherReading = () => {
  return (
    <Stack direction={"column"} py={8} spacing={6}>
      <Heading
        fontFamily={"Inter"}
        fontWeight={"700"}
        fontSize={"20px"}
        lineHeight={"160%"}
        letterSpacing={"-0.011em"}
        color={"#22224A"}
      >
        Further Reading
      </Heading>
      <Text
        fontFamily={"Inter"}
        lineHeight={"24px"}
        letterSpacing={"-0.011em"}
        color={"#A00D1E"}
        _hover={{color: '#273848'}}
        _active={{color: '#6B7280'}}
        cursor={'pointer'}
      >
        Disinformation 'expert' urges Canadian government to impose sanctions on
        Russia Today employees
      </Text>
      <Text
        fontFamily={"Inter"}
        lineHeight={"24px"}
        letterSpacing={"-0.011em"}
        color={"#A00D1E"}
        _hover={{color: '#273848'}}
        _active={{color: '#6B7280'}}
        cursor={'pointer'}
      >
        Conflict in Ukraine: NATO belligerence and the resulting geopolitical consequences
      </Text>
      <Text
        fontFamily={"Inter"}
        lineHeight={"24px"}
        letterSpacing={"-0.011em"}
        color={"#A00D1E"}
        _hover={{color: '#273848'}}
        _active={{color: '#6B7280'}}
        cursor={'pointer'}
      >
        Canada must end its complicity in Colombia’s grave human rights situation
      </Text>
    </Stack>
  );
};

export default FurtherReading;
