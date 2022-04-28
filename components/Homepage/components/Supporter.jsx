import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Supporter = () => {
  return (
    <Stack width={'100%'} my={'16px !important'} direction={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'#F9FAFB'} boxShadow={'0px 40px 30px rgba(163, 179, 194, 0.08), 0px 25px 20px rgba(163, 179, 194, 0.06), 0px 10px 8px rgba(163, 179, 194, 0.05)'} borderRadius={'4px'} spacing={{base: 6,md: 10,xl:16}} px={{base: 8, md: 16, lg:10}} py={{base: 10,md: 12,xl:16}}>
        <Heading fontFamily={'Merriweather'} fontWeight={'700'} fontSize={{base: '24px', md: '28px',lg: '36', xl:'40px'}} width={'100%'} textAlign={'center'} fontStyle={{sm: 'none', xl:'italic'}} color={'#22224A'}>Become a Supporter</Heading>
        <Stack fontFamily={'Inter'} fontSize={{md: '16px',lg: '18px',xl:'20px'}} color={'#273848'} lineHeight={'140%'} px={{lg: 12,xl:36}} spacing={6} display={{base: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}>
            <Text fontWeight={'600'}>Support critical investigation and analysis of Canadian foreign policy.</Text>
            <Text>We are a proudly socialist, anti-imperialist news organization working relentlessly to inform our audience and live up to the true essence of journalism. Through The Canada Files, we strive for the development of our most promising writers and our greater future. We can change the future together.</Text>
        </Stack>
        <Stack fontFamily={'Inter'} fontSize={{md: '16px',lg: '18px',xl:'20px'}} color={'#273848'} lineHeight={'140%'} px={4} display={{base: 'flex', md: 'none', lg: 'none', xl: 'none'}}>
            <Text lineHeight={'24px'} textAlign={'center'}>Support critical investigation and analysis of foreign policy issues in Canada and around the world.</Text>
        </Stack>
        <Button fontFamily={'Inter'} fontWeight={'700'} bgColor={'#CE1126'} p={6} color={'#FFFFFF'} width={{base: 'full',md: 'max-content',lg: 'max-content', xl:'max-content'}}>Donate to The Canada Files</Button>
    </Stack>
  )
}

export default Supporter