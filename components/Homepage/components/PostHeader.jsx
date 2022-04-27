import React from 'react'
import { Button, Heading, Stack } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Stack height={"64px"}
    direction={"row"}
    width={"100%"}
    justifyContent={'flex-start'}
    backgroundColor={"#E0E5E8"}
    marginTop={"0px !important"}
    px={8}
    fontFamily={'Inter'}
    display={{base: 'none',md: 'none', lg: 'flex', xl:'flex'}}
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
        >
          CANADA
        </Button>

        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          AFRICA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          ASIA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          MIDDLE EAST
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          NORTH AMERICA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          LATIN AMERICA
        </Button>
        <Button
          color={"#121212"}
          fontSize={"14px"}
          fontWeight={"600"}
          variant="link"
        >
          EUROPE
        </Button>

        
      </Stack>

    </Stack>
  )
}

export default PostHeader