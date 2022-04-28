import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";

const EditorNote = () => {
  return (
    <Stack direction={"column"} borderBottom={"1px solid #6B7280"} py={8} spacing={6}>
      <Heading
        fontFamily={"Inter"}
        fontWeight={"700"}
        fontSize={"20px"}
        lineHeight={"160%"}
        letterSpacing={"-0.011em"}
        color={"#22224A"}
      >
        Editor’s Note
      </Heading>
      <Text
        fontFamily={"Inter"}
        lineHeight={"24px"}
        letterSpacing={"-0.011em"}
        color={"#22224A"}
      >
        The Canada Files has spent more than two years doing critical
        investigative reporting on Canada's imperialist foreign policy. We’ve
        established a clear track record of exposing the truth Canada's
        political establishment hides from you. There's so much more we can do,
        but only with your financial support.
        <br />
        <br />
        When TCF's monthly support reaches $1250 CAD per month, up from $1155
        per month at present, we'll introduce the #uponfurtherinvestigation
        initiative! Check out this thread for more details.
        <br />
        <br />
        Please consider setting up a monthly or annual donation through
        Donorbox.
      </Text>
      <Button boxShadow={' 1px 3px 6px rgba(133, 146, 163, 0.45)'} borderRadius={'6px'} p={'16px 24px'} backgroundColor={'#CE1126'} color={'#F4F6F7'} width={'max-content'}>Donate to The Canada Files</Button>
    </Stack>
  );
};

export default EditorNote;
