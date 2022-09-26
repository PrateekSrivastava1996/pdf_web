import Head from 'next/head'
import Image from 'next/image'

import {CrouselPage ,SectionPage ,ListPage ,MainSideBar} from '../components/Common/MainPage/index'

export default function Home() {
  return (
    <>
    <MainSideBar>
    <CrouselPage/>
    <SectionPage />
    <ListPage />
    <h1> hello world</h1>
    </ MainSideBar>
    </>
  )
}
