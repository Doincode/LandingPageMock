import React from 'react'
import MainSection from '../sections/MainSection'
import CardsSection from '../sections/CardsSection'
import SliderSection from '../sections/SliderSection'
import MapsSection from '../sections/ContactSection'
import CounterSection from '../sections/CounterSection'

const HomePage = () => {
  return (
    <>
    <MainSection/>
      <CardsSection/>
      <CounterSection/>
      <SliderSection/>
      <MapsSection/>
    </>
  )
}

export default HomePage