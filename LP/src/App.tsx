import MainSection from "./sections/MainSection"
import HeaderComponent from "./components/HeaderComponent"
import CardsSection from "./sections/CardsSection"
import SliderSection from "./sections/SliderSection"
import MapsSection from "./sections/ContactSection"
import { Header } from "./components/styles"

function App() {

  return (
    <>
      <HeaderComponent/>
      <MainSection/>
      <CardsSection/>
      <SliderSection/>
      <MapsSection/>
    </>
  )
}

export default App
