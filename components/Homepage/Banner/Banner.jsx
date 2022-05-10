import { Heading, Stack, Text  } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/assets/images/homepage-banner.svg";

const Banner = () => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      maxHeight={{md: '184px',lg: '262px', xl: "262px"}}
      bgColor={"#121212"}
      padding={{md: "0" ,lg: "0", xl: '0 2rem', '2xl': '0 20em'}}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'0px !important'}
      display={{base: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}
    >
      <Stack width={{md: '40%' ,xl:'36%'}} height={{md: '184px', lg: '100%'}}>
        <Image objectFit="contain" alt='pic' src={bannerImg} width={'364px'} />
      </Stack>
      <Stack width={'25%'} display={{md: 'none', lg: 'flex'}}>
        <Heading color={"#F4F6F7"} fontWeight={'900'} fontSize={{lg: '44px' , xl:'48px'}} lineHeight={{lg: '46px',xl:'50px'}}>
          THE <br/><span style={{paddingLeft: '14px'}}>CANADA</span><br/> FILES
        </Heading>
      </Stack>
      <Stack width={{md: '60%' ,xl:'44%'}} paddingRight={'68px'} paddingLeft={{lg: '20px', xl: '0'}} spacing={6}>
        <Text color={'#F4F6F7'} sx={{fontFamily: 'Merriweather !important'}} fontWeight={'700'} fontSize={{md: '20px', lg: '22px' , xl:'26px'}} lineHeight={'130%'} fontStyle={'italic'} fontFamily={'sans-serif'}> 
          Anti-imperialist journalism challenging the Canadian empire
        </Text>
        <Text fontSize={{md: '14px',lg: '16px' , xl:'18px'}} color={'#F4F6F7'} fontWeight={'light'} sx={{fontFamily: 'Inter', marginLeft: '16px !important'}} lineHeight={'140%'}>Investigative reporting on Canadian foreign policy you wont get anywhere else</Text>
      </Stack>
    </Stack>
  );
};

export default Banner;
