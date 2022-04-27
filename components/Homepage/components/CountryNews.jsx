import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'

const CountryNews = ({section}) => {
  return (
    <Stack direction={'column'} width={'100%'} alignItems={'flex-start'} py={10} spacing={4}>
        <Heading fontFamily={'Merriweather'} fontStyle={'italic'} fontWeight={'700'} color={'#CE1126'} fontSize={'40px'}>{section ? section : 'Canada'}</Heading>
        <Stack direction={{base: 'column',md:'row'}} justifyContent={{base:'center', lg: 'space-between'}} width={'100%'} spacing={{base: 0, md: 6}}>
              <Stack>
              <Cards/>
              </Stack>

              <Stack>
              <Cards/>
              </Stack>

              <Stack display={{base: 'flex',md: 'none',lg: 'flex'}}>
              <Cards/>
              </Stack>
            </Stack>
        <Text fontFamily={'Inter'} fontSize={'20px'} fontWeight={'700'} marginTop={{base: '',lg:'0px !important'}} color={'#CE1126'}>View All {section ? section : 'Canada'}</Text>
    </Stack>
  )
}

export default CountryNews