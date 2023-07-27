import React from 'react'
import loader from "../../assets/Loader.svg"
import "./spinner.css"

export default function Spinner() {
  return (
    <div className='loader'>
      <header className="App-header">
        <img src={loader} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}
