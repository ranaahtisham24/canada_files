import { Stack } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header/Header'
import CountryNav from '../components/Homepage/components/CountryNav'
import ArticlePage from '../components/Article/index.js'
import Newsletter from '../components/Homepage/components/Newsletter'

const article = () => {
  return (
    <Stack direction={'column'} width={'100%'}>
        <Header/>
        <CountryNav/>
        <ArticlePage/>
        <Newsletter/>
    </Stack>
  )
}

export default article