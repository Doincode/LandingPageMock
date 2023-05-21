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
            <div>
              <h3 className='bc-slide'>Estamos perto de você!</h3>
              <p className='align-left dark-bg'>Atuação presencial em flagrantes na região de:</p>
              <ul className=''>
                <li>Balneário Camboriú;</li>
                <li>Itajaí;</li>
                <li>Navegantes;</li>
                <li>Curitiba e RMC;</li>
              </ul>
            </div>
            <button className=''>Chamar criminalista</button>
          </div>

          <div className='slide'>
              <img src={arrestimage} alt="" />
            <div>
              <h3 className=''>Situação de Emergência?</h3>
              <p>Atendimento em delegacia 24horas</p>
            </div>
              <button className=''>Clique aqui</button>
          </div>

          <div className='slide'>
            <img src={brasilimage} alt="" />
            <div>
              <h3 className=''>Sempre Prontos!</h3>
              <p>Atuamos em todo o Brasil</p>
            </div>
            <button className=''>Clique aqui</button>
          </div>

        </div>
      </SliderContent>
  )
}

export default SliderSection