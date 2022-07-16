import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/Footer'
import AboutRacold from '../components/hero/AboutRacold/AboutRacold'
import Carousel from '../components/hero/Carousel'
import FeaturedProduct from '../components/hero/FeaturedProducts/FeaturedProduct'
import HelpLine from '../components/hero/HelpLine/HelpLine'
import KnowledgeCenter from '../components/hero/KnowledgeCenter/KnowledgeCenter'
import Loading from '../components/loading/Loading'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import { getCarousalImages } from '../utils/firebase/storage/websiteContent'

const Home: NextPage = () => {
    const [imgUrls, setImgUrls] = useState<string[]>([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function getCarousalDownloadableImages() {
            setLoading(true);
            const urls = await getCarousalImages();
            setImgUrls(urls)
            setLoading(false);
        }

        getCarousalDownloadableImages();
    }, [])


    return (
        <>
            <Navbar />
            {
                imgUrls.length > 0 ? <Carousel imgUrls={imgUrls} /> : <Loading />
            }
            <FeaturedProduct />
            <AboutRacold />
            <HelpLine />
            <Footer />
        </>
    )
}

export default Home
