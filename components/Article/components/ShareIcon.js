import React from "react";
import Image from "next/image";
import Facebook from "../../../public/assets/images/articlefacebook.svg";
import Twitter from "../../../public/assets/images/articletwitter.svg";
import Clip from "../../../public/assets/images/clip.svg";
import Message from "../../../public/assets/images/message.svg";
import { Circle, Stack, Button } from "@chakra-ui/react";

const ShareIcon = () => {
  return (
    <Stack direction={"row"} width={"100%"} spacing={4}>
      <Circle
        size={10}
        backgroundColor={"#FFFFFF"}
        border={"1.5px solid #CBD6DC"}
      >
        <Image
          objectFit="contain"
          alt="pic"
          src={Twitter}
          width={"22px"}
          height={"22px"}
        />
      </Circle>
      <Circle
        size={10}
        backgroundColor={"#FFFFFF"}
        border={"1.5px solid #CBD6DC"}
      >
        <Image
          objectFit="contain"
          alt="pic"
          src={Facebook}
          width={"11px"}
          height={"22px"}
        />
      </Circle>
      <Circle
        size={10}
        backgroundColor={"#FFFFFF"}
        border={"1.5px solid #CBD6DC"}
      >
        <Image
          objectFit="contain"
          alt="pic"
          src={Message}
          width={"22px"}
          height={"22px"}
        />
      </Circle>
      <Button
        leftIcon={
          <Image
            objectFit="contain"
            alt="pic"
            src={Clip}
            width={"22px"}
            height={"22px"}
          />
        }
        backgroundColor={"transparent"}
        border={"1.5px solid #CBD6DC"}
        fontFamily={"Inter"}
        fontWeight={"700"}
        color={"#6B7280"}
      >
        Copy Link
      </Button>
    </Stack>
  );
};

export default ShareIcon;
