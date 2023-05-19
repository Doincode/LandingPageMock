import {useState} from 'react'
import { MainWrapper, SliderContent, BackgroundWrapper } from './style'
import bcimage from '../assets/bc.png'
import brasilimage from '../assets/brasil.png'
import arrestimage from '../assets/arrest.png'
import arrowLeft from '../assets/left.svg'
import arrowRight from '../assets/right.svg'

const SliderSection = () => {

  const [index, setIndex] = useState(1);

  

  const nextSlide = () => { 
    let indexNumber = index
    if(index == 3){
      setIndex(1)
      return
    }
    indexNumber++
    setIndex(indexNumber)

  }
  const prevSlide = () => { 
    let indexNumber = index
    if(index == 1){
      setIndex(3)
      return
    }
    indexNumber--
    setIndex(indexNumber)

  }
 
  return (
      <SliderContent>
        <div className="arrow-buttons">
          <img src={arrowLeft} alt="" onClick={prevSlide} />
          <img src={arrowRight} alt="" onClick={nextSlide} />
        </div>
        <div className={`slider ${index == 2 ? 'slide-2': index == 3 ? 'slide-3': ''}`}>

          <div className='slide'>
            <img src={bcimage} alt="" />
            <h3 className=''>Mais perto de você</h3>
            <p>Atuação presencial em flagrantes da região de Balneário Camboriú, Itajaí, Navegantes, Curitiba e região metropolitana.</p>
            <button className=''>Clique aqui{index}</button>
          </div>

          <div className='slide'>
            <img src={arrestimage} alt="" />
            <h3 className=''>Situação de Emergência?</h3>
            <p>Atendimento em delegacia 24horas</p>
            <button className=''>Clique aqui</button>
          </div>

          <div className='slide'>
            <img src={brasilimage} alt="" />
            <h3 className=''>Sempre Prontos!</h3>
            <p>Atuamos em todo o Brasil</p>
            <button className=''>Clique aqui</button>
          </div>

        </div>
      </SliderContent>
  )
}

export default SliderSection