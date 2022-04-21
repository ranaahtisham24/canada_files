import { Heading, Stack, Text  } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/assets/images/homepage-banner.svg";

const Banner = () => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      maxHeight={"262px"}
      bgColor={"#121212"}
      padding={"0 2rem"}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack width={'36%'}>
        <Image objectFit="contain" alt='pic' src={bannerImg} width={'364px'} />
      </Stack>
      <Stack width={'25%'}>
        <Heading color={"#F4F6F7"} fontWeight={'900'} fontSize={'48px'} lineHeight={'50px'}>
          THE <br/><span style={{paddingLeft: '14px'}}>CANADA</span><br/> FILES
        </Heading>
      </Stack>
      <Stack width={'44%'} paddingRight={'68px'} spacing={6}>
        <Text color={'#F4F6F7'} sx={{fontFamily: 'Merriweather !important'}} fontWeight={'500'} fontSize={'26px'} lineHeight={'130%'} fontStyle={'italic'} fontFamily={'sans-serif'}> 
          Anti-imperialist journalism challenging the Canadian empire
        </Text>
        <Text fontSize={'18px'} color={'#F4F6F7'} fontWeight={'light'} sx={{fontFamily: 'Inter', marginLeft: '16px !important'}} lineHeight={'140%'}>Investigative reporting on Canadian foreign policy you won&apot get anywhere else</Text>
      </Stack>
    </Stack>
  );
};

export default Banner;
