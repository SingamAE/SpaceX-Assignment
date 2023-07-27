import {React, useState} from 'react'
import "./page1.css"
import Logo from '../components/logo/Logo'
import Dropdowns from '../components/dropdowns/Dropdowns'
import Table from '../components/table/Table'

export default function Page1() {
  const moment = require("moment")
  let a = moment.utc("2006-03-24T22:30:00.000Z").toString();
  console.log(a)
   
  const [option, setOption] = useState("All Launches")
  return (
    <div className='page1'>
      <Logo/>
      <Dropdowns setOption={setOption}/>
      <Table option={option} />
    </div>
  )
}
