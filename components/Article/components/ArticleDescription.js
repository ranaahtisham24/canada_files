import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ShareIcon from "./ShareIcon";

const ArticleDescription = () => {
  return (
    <Stack spacing={8} direction={"column"} borderBottom={'1px solid #6B7280'} py={8}>
      <Heading
        fontSize={"24px"}
        fontFamily={"Inter"}
        fontWeight={"600"}
        lineHeight={"160%"}
        color={"#22224A"}
      >
        One or two sentences will go here that summarize/introduce the article.
        One or two sentences will go here.
      </Heading>

      <Text
        fontSize={"20px"}
        fontFamily={"Charter"}
        lineHeight={"160%"}
        color={"#22224A"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar eu sit
        sit in. Nulla sed in amet turpis purus neque velit. Molestie eu
        sagittis, neque, varius amet et. Neque, porta rhoncus, in gravida ut sit
        eros, egestas convallis. Risus ut hac etiam eleifend nullam quam. Sed
        lacus sodales ipsum adipiscing egestas ipsum blandit sed nisl. Purus
        pretium rhoncus in quam sed et. Ut aliquam ullamcorper eget euismod quam
        nec. Tincidunt augue quam orci sit accumsan ullamcorper.
        <br />
        <br />
        Viverra eget integer elementum lobortis vivamus at ultrices. Mi, in
        morbi vitae a, egestas non nisi, velit suscipit. Duis orci sapien amet
        vitae tellus. Eget suspendisse dui, sed lorem egestas sed diam fermentum
        tellus.
      </Text>

      <Stack spacing={6}>
        <Heading
          fontSize={"24px"}
          fontFamily={"Inter"}
          fontWeight={"600"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Subheading. Lorem ipsum dolor sit amet
        </Heading>

        <Text
          fontSize={"20px"}
          fontFamily={"Charter"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Lorem ipsum Egestas nunc arcu nibh pretium. Dolor, purus rutrum
          convallis vestibulum nibh nullam ut viverra nascetur. Semper neque
          morbi auctor molestie nulla. Sed eget molestie malesuada amet ultrices
          ut non. Lacinia malesuada eu sit cras eu at massa justo, et. Eu quis
          sit elit metus, id. Iaculis viverra in mattis nunc faucibus mauris,
          elementum amet ullamcorper. Sed volutpat massa ac elementum ridiculus.
          Accumsan, at nulla metus, vitae sed etiam. Pulvinar eu venenatis proin
          lectus pretium commodo volutpat urna.
        </Text>
      </Stack>

      <Stack spacing={6}>
        <Heading
          fontSize={"24px"}
          fontFamily={"Inter"}
          fontWeight={"600"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Subheading. Lorem ipsum dolor sit amet
        </Heading>

        <Text
          fontSize={"20px"}
          fontFamily={"Charter"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Lorem ipsum Egestas nunc arcu nibh pretium. Dolor, purus rutrum
          convallis vestibulum nibh nullam ut viverra nascetur. Semper neque
          morbi auctor molestie nulla. Sed eget molestie malesuada amet ultrices
          ut non. Lacinia malesuada eu sit cras eu at massa justo, et. Eu quis
          sit elit metus, id. Iaculis viverra in mattis nunc faucibus mauris,
          elementum amet ullamcorper. Sed volutpat massa ac elementum ridiculus.
          Accumsan, at nulla metus, vitae sed etiam. Pulvinar eu venenatis proin
          lectus pretium commodo volutpat urna.
          <br />
          <br />
          Ut id posuere lectus tortor a, sollicitudin vestibulum elit morbi. In
          risus id mattis pretium pellentesque id morbi. Ultrices dolor id
          scelerisque sed pulvinar mattis. Semper id cursus morbi quam
          consectetur. Massa, parturient ac ut euismod et amet pellentesque
          neque et. Malesuada ut tortor gravida tristique convallis. Diam urna,
          quis mauris fermentum, enim in quis pulvinar mauris. Erat in et et,
          suscipit dolor, velit eget. Scelerisque ornare iaculis nulla
          condimentum amet. Consequat vitae faucibus velit, odio sed praesent
          faucibus. Eget scelerisque.
        </Text>
      </Stack>

      <Stack spacing={6}>
        <Heading
          fontSize={"24px"}
          fontFamily={"Inter"}
          fontWeight={"600"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Subheading. Lorem ipsum dolor sit amet
        </Heading>

        <Text
          fontSize={"20px"}
          fontFamily={"Charter"}
          lineHeight={"160%"}
          color={"#22224A"}
        >
          Lorem ipsum Egestas nunc arcu nibh pretium. Dolor, purus rutrum
          convallis vestibulum nibh nullam ut viverra nascetur. Semper neque
          morbi auctor molestie nulla. Sed eget molestie malesuada amet ultrices
          ut non. Lacinia malesuada eu sit cras eu at massa justo, et. Eu quis
          sit elit metus, id. Iaculis viverra in mattis nunc faucibus mauris,
          elementum amet ullamcorper. Sed volutpat massa ac elementum ridiculus.
          Accumsan, at nulla metus, vitae sed etiam. Pulvinar eu venenatis proin
          lectus pretium commodo volutpat urna.
          <br />
          <br />
          Ut id posuere lectus tortor a, sollicitudin vestibulum elit morbi. In
          risus id mattis pretium pellentesque id morbi. Ultrices dolor id
          scelerisque sed pulvinar mattis. Semper id cursus morbi quam
          consectetur. Massa, parturient ac ut euismod et amet pellentesque
          neque et. Malesuada ut tortor gravida tristique convallis. Diam urna,
          quis mauris fermentum, enim in quis pulvinar mauris. Erat in et et,
          suscipit dolor, velit eget. Scelerisque ornare iaculis nulla
          condimentum amet. Consequat vitae faucibus velit, odio sed praesent
          faucibus. Eget scelerisque.
        </Text>
      </Stack>
      <ShareIcon/>
    </Stack>
  );
};

export default ArticleDescription;
