import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import { useEffect, useState, useLayoutEffect} from "react";
import Layout from '../components/shared/Layout'
import Navbar from '../components/Navbar'
import MainPage from '../components/MainPage'


const Home: NextPage = () => {
  const [message, setMessage] = useState("Next.js + TailwindCSS Skeleton");
  return (
    <Layout>
      <Navbar str={message}></Navbar>
      <MainPage setMessage={setMessage}></MainPage>
    </Layout>
  )
}

export default Home
