import { Stack, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Image from "next/image";
import Facebook from '../../../public/assets/images/facebook.svg'
import Twitter from '../../../public/assets/images/twitter.svg'
import Instagram from '../../../public/assets/images/instagram.svg'
import LinkedIn from '../../../public/assets/images/linkedin.svg'



const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      direction={"row"}
      height={"56px"}
      justifyContent={"space-between"}
      backgroundColor={"#CE1126"}
      alignItems={"center"}
      px={4}
      display={{base: 'flex',md: 'flex', lg:'none', xl: 'none'}}
      marginTop={'0px !important'}
    >
      <Stack direction={"row"} spacing={6} marginTop={"0px !important"}>
        <FontAwesomeIcon
          fontSize={"24px"}
          color="white"
          fontWeight={"300"}
          icon={faBars}
          onClick={onOpen}
        />
        <Heading
          color={"#F4F6F7"}
          fontFamily={"Open Sans"}
          fontSize={"24px"}
          fontWeight={"700"}
          lineHeight={"22px"}
        >
          THE CANADA FILES
        </Heading>
      </Stack>
      <Stack>
        <FontAwesomeIcon
          fontSize={"24px"}
          color="white"
          icon={faMagnifyingGlass}
        />
      </Stack>

      {/* Drawer Area */}

      <Drawer isOpen={isOpen} placement="left" size={"full"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding={0}>
            <Stack
              direction={"row"}
              height={"56px"}
              justifyContent={"space-between"}
              backgroundColor={"#CE1126"}
              alignItems={"center"}
              px={4}
            >
              <Stack direction={"row"} spacing={6} marginTop={"0px !important"}>
                <FontAwesomeIcon
                  fontSize={"24px"}
                  color="white"
                  fontWeight={"300"}
                  icon={faXmark}
                  onClick={onClose}
                />
                <Heading
                  color={"#F4F6F7"}
                  fontFamily={"Open Sans"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                  lineHeight={"22px"}
                >
                  THE CANADA FILES
                </Heading>
              </Stack>
              <Stack>
                <FontAwesomeIcon
                  fontSize={"24px"}
                  color="white"
                  icon={faMagnifyingGlass}
                />
              </Stack>
            </Stack>
          </DrawerHeader>

          <DrawerBody backgroundColor={"#161B1D"}>
            <Stack pt={16} pl={10} spacing={16}>
              <Stack direction={"column"} width={'100%'} spacing={4} color={'#F4F6F7'} pl={14} >
                <Heading fontSize={"20px"}>About</Heading>
                <Heading fontSize={"20px"}>Contact</Heading>
                <Heading fontSize={"20px"}>French</Heading>
                <Heading fontSize={"20px"}>Subscribe</Heading>
                <Heading fontSize={"20px"}>Donate</Heading>
              </Stack>

              <Stack direction={'row'} spacing={6}>
              <span>
              <Image objectFit='contain' alt='pic' src={Twitter} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={Facebook} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={Instagram} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={LinkedIn} width={'30px'} height={'24px'}/>
              </span>
            </Stack>
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

      {/* Drawer Area */}
    </Stack>
  );
};

export default MobileHeader;
