import Head from 'next/head'
import Image from 'next/image'

import {CrouselPage ,SectionPage ,ListPage} from '../components/Common/MainPage/index'

export default function Home() {
  return (
    <>
    <CrouselPage/>
    <SectionPage />
    <ListPage />
    <h1> hello world</h1>
    </>
  )
}
