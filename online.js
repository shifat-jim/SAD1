import React from 'react'
import "../Online/Online.css"
import { DisPlayPostData } from '../../../../Data/DisplayPostData'
import OnlineList from './onlinelist'


const Online = () => {
  return (
    <div className="online-comp">
      <h2>Available Teachers</h2>

      {DisPlayPostData.map((value,id)=>(
              <OnlineList 
              value={value}
              key={id}
              />

      ))}

    </div>
  )
}

export default Online