import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import Facebook from '../../public/assets/images/facebook.svg'
import Twitter from '../../public/assets/images/twitter.svg'
import Instagram from '../../public/assets/images/instagram.svg'
import Youtube from '../../public/assets/images/youtube.svg'

const Footer = () => {
  return (
    <Stack direction={'column'} color={'#F4F6F7'}>
      <Stack direction={{base: 'column', md: 'column',lg:'row'}} alignItems={'flex-start'} width={'100%'} bgColor={'#161B1D'} px={{base: 6,md: 12,lg: 24,xl:24, '2xl': '24em'}} py={{base: 10,md: 12,lg:20}} spacing={{md: 12}}>
          <Stack direction={'column'} width={{base: '100%',md: '100%',lg:'50%'}} alignItems={''} spacing={6} pr={{base: 0,md:16}}>
            <Heading fontSize={'24px'}>THE CANADA FILES</Heading>
            <Text letterSpacing={'-0.011em'}>Anti-imperialist journalism challenging the Canadian empire. Investigative reporting on Canadian foreign policy you won&apost get anywhere else.</Text>
            <Stack direction={'row'} pt={'8'} pl={2} spacing={{base: 10,md:6}}>
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
              <Image objectFit='contain' alt='pic' src={Youtube} width={'30px'} height={'24px'}/>
              </span>
            </Stack>
          </Stack>

          <Stack direction={{base: 'column',md:'row'}} width={{md: '100%',lg:'50%'}} justifyContent={'flex-start'} py={{base: 14,md: 0}} spacing={{base: 16,md: 40, lg: 0}}>
            <Stack direction={'column'} width={{md: 'auto',lg:'50%'}} spacing={{base: 6,md:4}}>
              <Heading fontSize={'20px'}>About</Heading>
              <Heading fontSize={'20px'}>Contact</Heading>
              <Heading fontSize={'20px'}>French</Heading>
              <Heading fontSize={'20px'}>Subscribe</Heading>
              <Heading fontSize={'20px'}>Donate</Heading>
            </Stack>
            <Stack direction={'column'} width={{md: 'auto',lg:'50%'}} spacing={{base: 6,md:4}}>
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
      <Stack direction={{base: 'column-reverse',md: 'column-reverse',lg:'row'}} fontFamily={'Inter'} fontWeight={'500'} justifyContent={'space-between'} color={'#F4F6F7'} px={{base: 6,md: 12,lg:24, '2xl': '24em'}} py={{base: 10,md:5}} bgColor={'#121212'} marginTop={'0 !important'} spacing={{base: 4, md: 0}}>
          <Text fontSize={'14px'}>Web design by Wildfern.io</Text>
          <Text fontSize={'12px'}>Copyright The Canada Files ?? 2022. All rights reserved.</Text>
      </Stack>
    </Stack>
  )
}

export default Footer