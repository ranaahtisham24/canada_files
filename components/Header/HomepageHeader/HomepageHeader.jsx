import { Button, Heading, Stack } from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomepageHeader = () => {
  return (
    <Stack
      height={"64px"}
      direction={"row"}
      width={"100%"}
      backgroundColor={"#CE1126"}
      marginTop={"0px !important"}
      px={8}
      fontFamily={'Inter'}
    >
      <Stack
        width={"50%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
        px={16}
      >
        <Heading color={"#F4F6F7"} fontFamily={'Open Sans'} fontSize={"22px"}>
          THE CANADA FILES
        </Heading>
        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="link"
        >
          About
        </Button>

        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="link"
        >
          Contact
        </Button>
        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="link"
        >
          French
        </Button>

        
      </Stack>
      <Stack
        width={"50%"}
        direction={"row"}
        justifyContent={"flex-end"}
        px={16}
        spacing={6}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <FontAwesomeIcon fontSize={'24px'} color="white" icon={faMagnifyingGlass} />
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button
            color="#F4F6F7"
            fontSize={"20px"}
            fontWeight={"400"}
            variant="ghost"
            _hover={{ color: "black" }}
            _focus={{ color: "black" }}
          >
            Subscribe
          </Button>
          <Button
            color="#F4F6F7"
            fontSize={"20px"}
            fontWeight={"400"}
            variant="outline"
            _hover={{ color: "black", padding: "18px" }}
            _focus={{ color: "black" }}
          >
            Donate
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomepageHeader;
