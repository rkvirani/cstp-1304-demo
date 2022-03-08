import FlexWrapper from '../components/FlexWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Nav from '../components/Nav'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ListStudentsPage() {
  return ( 
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
  <FlexWrapper>
    <Header>Sam Hill's Discount Student App</Header>
    <Nav></Nav>
    <Main>Content goes here...</Main>
    <Footer></Footer>
    </FlexWrapper>
    </>
  )
}
