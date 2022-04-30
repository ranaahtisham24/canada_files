import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from '../components/Homepage/Banner/Banner.jsx'
import CountryNews from '../components/Homepage/components/CountryNews.jsx'
import Cards from '../components/Homepage/components/Cards.jsx'
import LatestPost from '../components/Homepage/components/LatestPost.jsx'
import Newsletter from '../components/Homepage/components/Newsletter.jsx'
import Supporter from '../components/Homepage/components/Supporter.jsx'
import styles from '../styles/Home.module.css'
import MobileHeader from '../components/Header/MobileHeader/MobileHeader.jsx'
import Header from '../components/Header/Header.js'
import CountryNav from '../components/Homepage/components/CountryNav.jsx'
import CardsGroup from '../components/Homepage/components/CardsGroup.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canada Files</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack width={'100%'}>
        <Stack >
          <MobileHeader/>
        </Stack>
        <Banner/>
        {/* <HomepageHeader/> */}
        <Header/>
        <CountryNav/>
        <Stack width={'100%'} height={'100%'} backgroundColor={'#F4F6F7'} justifyContent={'center'} alignItems={'center'} px={{base: 6,md: 10,lg: 24,xl:24}} py={14} marginTop={'0 !important'} spacing={8}>
            <LatestPost/>
            <Stack direction={{base: 'column',md:'row', lg: 'column'}} display={{base: 'flex',md: 'none',lg: 'flex', xl: 'flex'}} justifyContent={'center'} width={'100%'} py={10} spacing={{base: 10, lg:0}}>
              <Stack direction={{base: 'column',md:'row'}} justifyContent={'space-between'}>
              <CardsGroup/>
              </Stack>

              <Stack direction={{base: 'column',md:'row'}} marginTop={'0px !important'} justifyContent={'space-between'}>
              <CardsGroup/>
              </Stack> 
            </Stack>
            

            <Stack direction={'column'} display={{base: 'none',md: 'flex',lg: 'none'}} justifyContent={'center'} width={'100%'} py={10} spacing={10}>
              <Stack direction={'row'} spacing={6}>
              <Cards/>
              <Cards/>
              </Stack>

              <Stack direction={'row'} spacing={6}>
              <Cards/>
              <Cards/>
              </Stack>

              <Stack direction={'row'} spacing={6}>
              <Cards/>
              <Cards/>
              </Stack>
            </Stack>

            <CountryNews/>
            <CountryNews section={'Africa'}/>
            <Supporter/>
            <CountryNews section={'Asia'}/>
            <CountryNews section={'Middle East'}/>
            <CountryNews section={'North America'}/>
            <CountryNews section={'Latin America'}/>
            <CountryNews section={'Europe'}/>
        </Stack>
        <Newsletter/>
      </Stack>

    </div>
  )
}
