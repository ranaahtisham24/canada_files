import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ArticleImg from '../../../public/assets/images/latestarticle.svg'

const ArticleImage = () => {
  return (
    <Stack width={"100%"}>
      <Image
        objectFit="contain"
        alt="pic"
        src={ArticleImg}
        width={"696px"}
        height={"430px"}
      />
      <Text fontFamily={'Inter'} lineHeight={'24px'} color={'#6B7280'} letterSpacing={'-0.011em'} marginTop={'0 !important'}>Nicaraguan President Daniel Ortega waves to a crowd.</Text>
    </Stack>
  );
};

export default ArticleImage;
