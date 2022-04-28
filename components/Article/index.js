import { Heading, Link, Stack,Text } from "@chakra-ui/react";
import React from "react";
import Newsletter from "../Homepage/components/Newsletter";
import AboutAuthor from "./components/AboutAuthor";
import ArticleDescription from "./components/ArticleDescription";
import ArticleImage from "./components/ArticleImage";
import EditorNote from "./components/EditorNote";
import FurtherReading from "./components/FurtherReading";
import ShareIcon from "./components/ShareIcon";

const index = () => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      px={{lg: 72,xl: 80 }}
      py={{lg: 14}}
      backgroundColor={"#F4F6F7"}
      marginTop={'0 !important'}
      spacing={6}
    >
        <Heading fontFamily={'Charter'} fontSize={{lg: '30px',xl:'32px'}} fontWeight={'700'} lineHeight={'140%'} color={'#22224A'}>Why has Nicaragua’s democratic election been attacked by Canada and the USA?</Heading>
        <Stack direction={'row'} width={'100%'} spacing={4}>
            <Link textDecoration={"underline"}>Alison Bodine</Link>
            <Text>March 21, 2022</Text>
        </Stack>
        <ShareIcon/>
        <ArticleImage/>
        <ArticleDescription/>
        <AboutAuthor/>
        <EditorNote/>
        <FurtherReading/>
    </Stack>
  );
};

export default index;
