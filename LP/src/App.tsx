import MainSection from "./sections/MainSection"
import HeaderComponent from "./components/HeaderComponent"
import CardsSection from "./sections/CardsSection"
import SliderSection from "./sections/SliderSection"
import MapsSection from "./sections/ContactSection"
import { Header } from "./components/styles"
import CounterSection from "./sections/CounterSection"

function App() {

  return (
    <>
      <HeaderComponent/>
      <MainSection/>
      <CardsSection/>
      <CounterSection/>
      <SliderSection/>
      <MapsSection/>
    </>
  )
}

export default App
