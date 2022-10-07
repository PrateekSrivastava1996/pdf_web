import Head from 'next/head'
import Image from 'next/image'

import {CrouselPage ,SectionPage ,ListPage ,MainSideBar } from '../components/Common/MainPage/index'

export default function Home() {
  return (
    <>
    <CrouselPage/>
    <MainSideBar>
    <SectionPage />
    <ListPage />
    </ MainSideBar>
    </>
  )
}
