import { Button, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Newsletter = () => {
  return (
    <Stack direction={'column'} width={'100%'} alignItems={'center'} height={'358px'} spacing={12} bgColor={'#F9FAFB'} px={10} py={28} marginTop={'0 !important'}>
        <Heading fontFamily={'Merriweather'} fontStyle={'italic'} fontWeight={'700'} fontSize={'40px'} lineHeight={'50px'} textAlign={'center'} color={'#22224A'}>Be the first to know. Get our newsletter</Heading>
        <Stack direction={'column'}>
            <Stack direction={'row'}>
                <Input placeholder='Your email address' fontFamily={'Inter'} bgColor={'#FFFFFF'} width={'397px'} border={'2px solid #E0E5E8'} boxShadow={'inset 2px 4px 4px rgba(8, 63, 77, 0.1)'} borderRadius={'6px'} />
                <Button fontFamily={'Inter'} fontWeight={'700'} bgColor={'#CE1126'} color={'#FFFFFF'} width={'max-content'} padding={'12px 16px'} boxShadow={'1px 3px 6px rgba(133, 146, 163, 0.45)'} borderRadius={'6px'}>Subscribe</Button>
            </Stack>
            <Text color={'#3B82F6'} fontSize={'12px'} fontWeight={'700'} fontFamily={'inter'}>Privacy Policy</Text>
        </Stack>
    </Stack>
  )
}

export default Newsletter