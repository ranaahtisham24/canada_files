import React,{ useState } from 'react'
import { Button, Heading, Stack } from "@chakra-ui/react";


const CountryNav = () => {

  const [selection, setSelection] = useState(false)
  return (
    <Stack height={"64px"}
    direction={"row"}
    width={"100%"}
    justifyContent={'flex-start'}
    backgroundColor={"#E0E5E8"}
    marginTop={"0px !important"}
    px={{base: 5, lg:5 ,xl: 8, '2xl': '30em'}}
    fontFamily={'Inter'}
    display={{base: 'none',md: 'none', lg: 'flex', xl:'flex'}}
    boxShadow={'0px 4px 5px rgba(107, 114, 128, 0.25)'}
    zIndex={1}
    >
        <Stack
        width={"100%"}
        direction={"row"}
        // justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
        px={16}
        spacing={{lg: 6,xl:8}}
      >
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          textDecoration={'none !important'}
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          CANADA
        </Button>

        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          textDecoration={'none !important'}
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          AFRICA
        </Button>
        <Button
          color={"#121212"}
          textDecoration={'none !important'}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          ASIA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          textDecoration={'none !important'}
          variant="link"
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          MIDDLE EAST
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          textDecoration={'none !important'}
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          NORTH AMERICA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          textDecoration={'none !important'}
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          LATIN AMERICA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
          textDecoration={'none !important'}
          _hover={{borderBottom:'3px solid #CE1126'}}
          _active={{borderBottom:'3px solid #CE1126', color:'#6B7280'}} 
          height={'full'}
          borderRadius={'0'}
        >
          EUROPE
        </Button>

        
      </Stack>

    </Stack>
  )
}

export default CountryNav