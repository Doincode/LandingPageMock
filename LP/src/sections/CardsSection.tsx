import React from 'react'
import { Card, CardsContent } from './style'
import firstIcon from '../assets/icon-1.svg'
import secondIcon from '../assets/icon-2.svg'
import thirdIcon from '../assets/icon-3.svg'
import fourthIcon from '../assets/icon-4.svg'
import fifthIcon from '../assets/icon-5.svg'

const CardsSection = () => {
  return (
    <CardsContent>
        <ul>
            <li id='first'>
                <Card>
                    <img src={firstIcon} alt='' />
                </Card>
                <p>Audiência de custódia</p>
            </li>
            <li id='second'>
                <Card>
                    <img src={secondIcon} alt='' />
                </Card>
                <p>Restituição de bens e valores</p>
            </li>
            <li id='third'>
                <Card>
                    <img src={thirdIcon} alt='' />
                </Card>
                <p>Acompanhamento de flagrantes</p>
            </li>
            <li id='fourth'>
                <Card>
                    <img src={fifthIcon} alt='' />
                </Card>
                <p>Acompanamento de<br/> inquérito policial administrativo</p>
            </li>
            <li id='fifth'>
                <Card>
                    <img src={fourthIcon} alt='' />
                </Card>
                <p>Defesa Processual</p>
            </li>
        </ul>
    </CardsContent>
  )
}

export default CardsSection