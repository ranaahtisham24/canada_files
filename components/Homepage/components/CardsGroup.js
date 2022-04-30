import { Stack } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'

const CardsGroup = () => {
  return (
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
  )
}

export default CardsGroup