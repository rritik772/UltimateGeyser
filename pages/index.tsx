import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutRacold from '../components/hero/AboutRacold/AboutRacold'
import Carousel from '../components/hero/Carousel'
import FeaturedProduct from '../components/hero/FeaturedProducts/FeaturedProduct'
import HelpLine from '../components/hero/HelpLine/HelpLine'
import KnowledgeCenter from '../components/hero/KnowledgeCenter/KnowledgeCenter'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeaturedProduct />
      <AboutRacold />
      <HelpLine />
    </>
  )
}

export default Home
