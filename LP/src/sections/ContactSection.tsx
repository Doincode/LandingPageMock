import React from 'react'
import {ContactContent } from './style'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import wppIcon from '../assets/zapvector.svg'
import phoneIcon from '../assets/phonevector.svg'
import mailIcon from '../assets/mailvector.svg'
import instaIcon from '../assets/instavector.svg'
import backgroundImg from '../assets/esc.png'


const MapsSection = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD31CzzvRYvNTHIvtOzUWGJ_jQw-5r7Qys'
  })                    

  return (
    <ContactContent>
        <h1>Entre em contato!</h1>
        <div className="socials">
          <img src={wppIcon} alt="" />
          <img src={mailIcon} alt="" />
          <img src={instaIcon} alt="" />
          <img src={phoneIcon} alt="" />
        </div>
        <div className="map">
        { isLoaded ? (
      <GoogleMap  
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={{lat: -27.00345121502357, lng: -48.6258688453037}}
        zoom={15}
      >
      <Marker position={{lat: -27.00345121502357, lng: -48.6258688453037}}/>
        <></>
      </GoogleMap>
      ) : <></>}
        </div>

      <img src={backgroundImg} alt="" />
    </ContactContent>
  )
}

export default MapsSection