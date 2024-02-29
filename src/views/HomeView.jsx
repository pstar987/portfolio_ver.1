import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Port from '../components/Port'
import Site from '../components/Site'
import Main from '../components/Main'

const HomeView = () => {
  return (
    <div>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>

        <Footer />


    </div>
  )
}

export default HomeView
