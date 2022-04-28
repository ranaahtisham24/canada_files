import { Button, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
// import HomepageHeader from '../components/Header/HomepageHeader/HomepageHeader.jsx'
import Banner from '../components/Homepage/Banner/Banner.jsx'
import CountryNews from '../components/Homepage/components/CountryNews.jsx'
import Cards from '../components/Homepage/components/Cards.jsx'
import LatestPost from '../components/Homepage/components/LatestPost.jsx'
import Newsletter from '../components/Homepage/components/Newsletter.jsx'
import PostHeader from '../components/Homepage/components/PostHeader.jsx'
import Supporter from '../components/Homepage/components/Supporter.jsx'
import styles from '../styles/Home.module.css'
import MobileHeader from '../components/Header/MobileHeader/MobileHeader.jsx'
import Header from '../components/Header/Header.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canada Files</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack width={'100%'}>
        <Stack display={{sm: 'flex',md: 'flex', lg:'none', xl: 'none'}}>
          <MobileHeader/>
        </Stack>
        <Banner/>
        {/* <HomepageHeader/> */}
        <Header/>
        <PostHeader/>
        <Stack width={'100%'} height={'100%'} backgroundColor={'#F4F6F7'} justifyContent={'center'} alignItems={'center'} px={{base: 6,md: 10,lg: 24,xl:24}} py={14} marginTop={'0 !important'} spacing={8}>
            <LatestPost/>
            <Stack direction={{base: 'column',md:'row', lg: 'column'}} display={{base: 'flex',md: 'none',lg: 'flex', xl: 'flex'}} justifyContent={'center'} width={'100%'} py={10} spacing={{base: 10, lg:0}}>
              <Stack direction={{base: 'column',md:'row'}} spacing={{base: 6, xl: 12}}>
              <Cards/>
              <Cards/>
              <Cards/>
              </Stack>

              <Stack direction={{base: 'column',md:'row'}} marginTop={'0px !important'} spacing={{base: 6, xl: 12}}>
              <Cards/>
              <Cards/>
              <Cards/>
              </Stack>
            </Stack>
            
            {/* <Stack direction={'row'} display={{base: 'none',md: 'flex',lg: 'none', xl: 'none'}} justifyContent={'center'} width={'100%'} py={10} spacing={6}>
              <Cards/>
              <Cards/>
            </Stack> */}

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

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
