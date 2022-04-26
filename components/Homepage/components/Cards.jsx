import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Card1 from "../../../public/assets/images/Card1.png";

const Cards = () => {
  const date = new Date().toLocaleString('en-us',{month:'short', day: 'numeric', year:'numeric'});
  console.log(date)

  
  const property = {
    imageUrl: Card1,
    title:
      "Conflict in Ukraine: NATO belligerence and the resulting geopolitical consequences",
    newsDate: date,
  };
  
  return (
    <Stack height={'100%'}>
      <Box maxW="372px" borderWidth="1px" borderRadius="4px" overflow="hidden" minHeight={"470px"} bgColor={'#FFFFFF'} boxShadow={'0px 40px 30px rgba(163, 179, 194, 0.08), 0px 25px 20px rgba(163, 179, 194, 0.06), 0px 10px 8px rgba(163, 179, 194, 0.05)'}>
        <Image src={property.imageUrl} alt='pic'/>

        <Box p="6" fontFamily={'Inter'}>
          <Box mt="1" fontWeight="600" as="h3" fontSize={'20px'} lineHeight={'140%'} color={'#22224A'}>
            {property.title}
          </Box>

          <Box display="flex" mt="6" alignItems="center">
            {/* <Box as="span" color="#6B7280" fontSize="sm"> */}
              <Text letterSpacing={'-0.011em'} color="#6B7280" fontSize="sm">{property.newsDate}</Text>
            {/* </Box> */}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Cards;
