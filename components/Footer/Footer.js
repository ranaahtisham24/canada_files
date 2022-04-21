import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import Facebook from '../../public/assets/images/facebook.svg'
import Twitter from '../../public/assets/images/twitter.svg'
import Instagram from '../../public/assets/images/instagram.svg'
import LinkedIn from '../../public/assets/images/linkedin.svg'

const Footer = () => {
  return (
    <Stack direction={'column'} color={'#F4F6F7'}>
      <Stack direction={'row'} alignItems={'flex-start'} width={'100%'} bgColor={'#161B1D'} px={24} py={20}>
          <Stack direction={'column'} width={'50%'} alignItems={''} spacing={6} pr={16}>
            <Heading fontSize={'24px'}>THE CANADA FILES</Heading>
            <Text letterSpacing={'-0.011em'}>Anti-imperialist journalism challenging the Canadian empire. Investigative reporting on Canadian foreign policy you won&apost get anywhere else.</Text>
            <Stack direction={'row'} pt={'8'} pl={2} spacing={6}>
              <span>
              <Image objectFit='contain' alt='pic' src={Twitter} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={Facebook} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={Instagram} width={'30px'} height={'24px'}/>
              </span>
              <span>
              <Image objectFit='contain' alt='pic' src={LinkedIn} width={'30px'} height={'24px'}/>
              </span>
            </Stack>
          </Stack>

          <Stack direction={'row'} width={'50%'} justifyContent={'flex-start'}>
            <Stack direction={'column'} width={'50%'} spacing={4}>
              <Heading fontSize={'20px'}>About</Heading>
              <Heading fontSize={'20px'}>Contact</Heading>
              <Heading fontSize={'20px'}>French</Heading>
              <Heading fontSize={'20px'}>Subscribe</Heading>
              <Heading fontSize={'20px'}>Donate</Heading>
            </Stack>
            <Stack direction={'column'} width={'50%'}>
              <Heading fontSize={'20px'}>News</Heading>
              <Text>Canada</Text>
              <Text>Africa</Text>
              <Text>Asia</Text>
              <Text>Middle East</Text>
              <Text>North America</Text>
              <Text>Latin America</Text>
              <Text>Europe</Text>
            </Stack>
          </Stack>
      </Stack>
      <Stack direction={'row'} fontFamily={'Inter'} fontWeight={'500'} justifyContent={'space-between'} color={'#F4F6F7'} px={24} py={5} bgColor={'#121212'} marginTop={'0 !important'}>
          <Text fontSize={'14px'}>Web design by Wildfern.io</Text>
          <Text fontSize={'12px'}>Copyright The Canada Files © 2022. All rights reserved.</Text>
      </Stack>
    </Stack>
  )
}

export default Footer