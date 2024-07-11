import React, { useState } from 'react'

function DivState() {
    const [backgroundColors, setbackgroundColor] = useState("red")
    
    const changeColor = () => {
        setbackgroundColor("black")
    }

  return (<>
  <div style={{ display: "flex", justifyContent: "space-between"}}> 
    <div style={{width: "200px", height: "200px", backgroundColor: backgroundColors }}></div>
    <div style={{width: "200px", height: "200px", backgroundColor: backgroundColors }}></div>
    </div>
    <button onClick={changeColor}>Renk Değiştir</button>
    </>
  )
}

export default DivState