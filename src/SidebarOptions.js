import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions({title,Icon,number,selected}) {
  return (
    <div className="sidebarOptions">
    <div className={`sidebarOption ${selected && `sidebarOption__active`}`}>
    <Icon/>
    <h3>{title}</h3>
    <p>{number}</p>
    </div>
    
    </div>
  )
}

export default SidebarOptions