import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'

const CountryNews = ({section}) => {
  return (
    <Stack direction={'column'} width={'100%'} alignItems={'flex-start'} py={10} spacing={4}>
        <Heading fontFamily={'Merriweather'} fontStyle={'italic'} fontWeight={'700'} color={'#CE1126'} fontSize={'40px'}>{section ? section : 'Canada'}</Heading>
        <Stack direction={'row'} justifyContent={'space-between'} width={'100%'} height={'490px'}>
              <Cards/>
              <Cards/>
              {/* <Cards/> */}
            </Stack>
        <Text fontFamily={'Inter'} fontSize={'20px'} fontWeight={'700'} marginTop={'0 !important'} color={'#CE1126'}>View All {section ? section : 'Canada'}</Text>
    </Stack>
  )
}

export default CountryNews