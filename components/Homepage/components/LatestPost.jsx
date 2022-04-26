import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LatestImg from '../../../public/assets/images/latestarticle.svg'
import Image from "next/image";


const LatestPost = () => {
  return (
    <Stack width={'100%'} backgroundColor={'#FFFFFF'} direction={'row'} borderRadius={'4px'}>
        <Stack width={'62%'} height={"100%"}>
            <Box width={'100%'} height={'100%'}>
            <Image objectFit="contain" alt='pic' src={LatestImg}/>
            </Box>
        </Stack>
        <Stack width={'38%'} direction={'column'}  height={'100%'} p={6} pt={{lg: 6,xl:16}} marginLeft={'0 !important'} justifyContent={'center'} alignItems={'flex-start'} spacing={{lg: 4,xl:8}}>
            <Heading fontFamily={'Merriweather'} fontSize={{lg: '24px',xl:'28px'}} lineHeight={'140%'} fontWeight={'700'} color={'#22224A'}>Why has Nicaragua democratic election been attacked by Canada and the USA? (some of the article titles are longer than that)</Heading>
            <Text fontFamily={'Inter'} fontWeight={'400'} color={'#6B7280'}>March 21, 2022</Text>
        </Stack>
    </Stack>
  )
}

export default LatestPost