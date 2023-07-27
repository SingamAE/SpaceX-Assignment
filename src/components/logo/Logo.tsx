import React from 'react'
import "./logo.css"
import logo from '../../assets/Logo.png'


export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt=""/>
    </div>
  )
}
