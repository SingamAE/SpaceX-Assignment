import React from 'react'
import { ReactComponent as Frame } from "../../assets/Frame.svg"
import { ReactComponent as Icon } from "../../assets/Icon.svg"
import "./dropdown.css"

type ddProps={
  setOption: any
}

export default function Dropdowns({setOption}:ddProps) {
  return (
    <div className='dropdowns'>
      <div className='date_dd'>
            <Icon/>
            <select>
                <option>Past 6 Months</option>
            </select>
      </div>
      <div className='filter_dd'>
            <Frame/>
            <select onChange={(e)=>setOption(e.target.value)}>
                <option value="All Launches">All Launches</option>
                <option value="Upcoming Launches">Upcoming Launches</option>
                <option value="Successful Launches">Successful Launches</option>
                <option value="Failed Launches">Failed Launches</option>
            </select>
      </div>
    </div>
  )
}
