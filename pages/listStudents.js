import React, { useEffect, useState } from 'react'

import FlexWrapper from '../components/FlexWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Nav from '../components/Nav'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StudentRow from '../components/StudentRow'

export default function ListStudentsPage() {

  const [ allStudents , setStudents ] = useState([]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')))
    console.log("Use Effect has been executed.");
  },[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <FlexWrapper>
        <Header>Sam Hill's Discount Student App</Header>
        <Nav></Nav>
        <Main><h1>Here is a list of students...</h1>
        <table><tbody>
        {
          allStudents.map((s) => <StudentRow firstName={s.firstName} lastName = {s.lastName} program={s.program} />)
          
        }</tbody></table></Main>
        <Footer></Footer>
      </FlexWrapper>
    </>
  )
}
