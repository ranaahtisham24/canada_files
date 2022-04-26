import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Supporter = () => {
  return (
    <Stack width={'100%'} direction={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'#F9FAFB'} boxShadow={'0px 40px 30px rgba(163, 179, 194, 0.08), 0px 25px 20px rgba(163, 179, 194, 0.06), 0px 10px 8px rgba(163, 179, 194, 0.05)'} borderRadius={'4px'} spacing={{md: 12,xl:16}} px={10} py={{md: 12,xl:16}}>
        <Heading fontFamily={'Merriweather'} fontWeight={'700'} fontSize={{md: '28px',lg: '36', xl:'40px'}} width={'100%'} textAlign={'center'} fontStyle={'italic'} color={'#22224A'}>Become a Supporter</Heading>
        <Stack fontFamily={'Inter'} fontSize={{md: '16px',lg: '18px',xl:'20px'}} color={'#273848'} lineHeight={'140%'} px={{lg: 12,xl:36}} spacing={6}>
            <Text fontWeight={'600'}>Support critical investigation and analysis of Canadian foreign policy.</Text>
            <Text>We are a proudly socialist, anti-imperialist news organization working relentlessly to inform our audience and live up to the true essence of journalism. Through The Canada Files, we strive for the development of our most promising writers and our greater future. We can change the future together.</Text>
        </Stack>
        <Button fontFamily={'Inter'} fontWeight={'700'} bgColor={'#CE1126'} p={6} color={'#FFFFFF'} width={'max-content'}>Donate to The Canada Files</Button>
    </Stack>
  )
}

export default Supporter