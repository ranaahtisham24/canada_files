import { Button, Heading, Stack } from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import DefaultSearchIcon from '../../public/assets/images/DefaultSearchIcon.svg'
import SearchIconBlack from '../../public/assets/images/SearchIconBlack.svg'
import GreySearchIcon from '../../public/assets/images/GreySearchIcon.svg'
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false)
  const [pressed, setPressed] = useState(false)
  console.log("🚀 ~ file: Header.js ~ line 10 ~ Header ~ show", show)
  return (
    <Stack
      height={"64px"}
      direction={"row"}
      width={"100%"}
      backgroundColor={"#CE1126"}
      marginTop={"0px !important"}
      px={{ lg: 4, xl: 8, '2xl': '20em' }}
      fontFamily={"Inter"}
      justifyContent={"space-between"}
      display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
        pl={16}
        spacing={{ lg: 6, xl: 10 }}
      >
        <Heading
          color={"#F4F6F7"}
          fontFamily={"Open Sans"}
          fontSize={"22px"}
          lineHeight={"20px"}
          _hover={{ color: "#121212" }}
          _active={{ color: "#E0E5E8" }}
        >
          THE CANADA FILES
        </Heading>
        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="ghost"
          _hover={{ color: "#121212" }}
          _active={{ color: "#E0E5E8" }}
          p={0}
        >
          About
        </Button>

        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="ghost"
          _hover={{ color: "#121212" }}
          _active={{ color: "#E0E5E8" }}
          p={0}
        >
          Contact
        </Button>
        <Button
          color={"#F4F6F7"}
          fontSize={"20px"}
          fontWeight={"400"}
          variant="ghost"
          _hover={{ color: "#121212" }}
          _active={{ color: "#E0E5E8" }}
          p={0}
        >
          French
        </Button>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        pr={16}
        spacing={{ lg: 3, xl: 8 }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          onMouseEnter={()=> setShow(true)}
          onMouseLeave={()=> setShow(false)}
          onClick={()=> setPressed(true)}
        >
          {pressed ? 
            <Image objectFit="contain" src={GreySearchIcon}/>:
            show ? 
            <Image objectFit="contain" src={SearchIconBlack}/>:
            <Image objectFit="contain" src={DefaultSearchIcon}/> 
          }
          
          
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button
            color="#F4F6F7"
            fontSize={"20px"}
            fontWeight={"400"}
            variant="ghost"
            _hover={{ color: "#121212" }}
            _active={{ color: "#E0E5E8" }}
          >
            Subscribe
          </Button>
          <Button
            color="#F4F6F7"
            fontSize={"20px"}
            fontWeight={"400"}
            variant="outline"
            _hover={{ color: "#121212", borderColor: "#121212" }}
            _active={{ color: "#E0E5E8", borderColor: "#E0E5E8" }}
          >
            Donate
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
