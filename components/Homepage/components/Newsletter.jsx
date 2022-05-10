import { Button, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Newsletter = () => {
  return (
    <Stack direction={'column'} width={'100%'} alignItems={'center'} spacing={{base: 6,md:12}} bgColor={'#F9FAFB'} px={{base: 6,md:10}} py={{base: 16,md: 20, lg: 24,xl:28}} marginTop={'0 !important'}>
        <Heading fontFamily={'Merriweather'} fontStyle={{base:  "none", md: 'italic'}} fontWeight={'700'} px={{base: 12, md: 0}} fontSize={{base: '24px',md: '28px',lg: '36px',xl:'40px'}} lineHeight={{base: '29px',md:'50px'}} textAlign={'center'} color={'#22224A'}>Be the first to know. Get our newsletter</Heading>
        <Stack direction={'column'} width={{base: '100%',md: '80%',lg: '60%',xl:'50%'}} alignItems={{base: 'center' ,md:'flex-start'}}>
            <Stack direction={{base: 'column', md: 'row'}} width={'100%'} spacing={3}>
                <Input width={'100%'} placeholder='Your email address' fontFamily={'Inter'} bgColor={'#FFFFFF'} border={'2px solid #E0E5E8'} boxShadow={'inset 2px 4px 4px rgba(8, 63, 77, 0.1)'} borderRadius={'6px'} />
                <Button fontFamily={'Inter'} fontWeight={'700'} bgColor={'#CE1126'} color={'#FFFFFF'} width={{base: '100%',md: 'max-content'}} padding={'12px 16px'} boxShadow={'1px 3px 6px rgba(133, 146, 163, 0.45)'} borderRadius={'6px'} _hover={{backgroundColor: 'none'}} _active={{backgroundColor: '#A00D1E'}}>Subscribe</Button>
            </Stack>
            <Text color={'#3B82F6'} fontSize={'12px'} fontWeight={'700'} fontFamily={'inter'}>Privacy Policy</Text>
        </Stack>
    </Stack>
  )
}

export default Newsletter