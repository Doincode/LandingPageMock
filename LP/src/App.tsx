import MainSection from "./sections/MainSection"
import HeaderComponent from "./components/HeaderComponent"
import CardsSection from "./sections/CardsSection"
import SliderSection from "./sections/SliderSection"
import MapsSection from "./sections/ContactSection"
import { Header } from "./components/styles"
import CounterSection from "./sections/CounterSection"
import { Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ServicesPage from "./pages/ServicesPage"

function App() {

  return (
    <>
      <HeaderComponent/>
      <Route exact path="/" component={HomePage} />
      <Route  path="/sobre-nos" component={AboutUsPage} />
      <Route  path="/area-criminal" component={ServicesPage} />
      
    </>
  )
}

export default App
