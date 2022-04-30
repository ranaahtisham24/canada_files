import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import CardsGroup from './CardsGroup'

const CountryNews = ({section}) => {
  return (
    <Stack direction={'column'} width={'100%'} alignItems={'flex-start'} py={10} spacing={4}>
        <Heading fontFamily={'Merriweather'} fontStyle={'italic'} fontWeight={'700'} color={'#CE1126'} fontSize={'40px'}>{section ? section : 'Canada'}</Heading>
        <CardsGroup/>
        <Text fontFamily={'Inter'} fontSize={'20px'} fontWeight={'700'} marginTop={{base: '',lg:'0px !important'}} color={'#CE1126'} _hover={{color: '#A00D1E'}} cursor={'pointer'} _active={{color: '#6B7280'}}>View All {section ? section : 'Canada'}</Text>
    </Stack>
  )
}

export default CountryNews