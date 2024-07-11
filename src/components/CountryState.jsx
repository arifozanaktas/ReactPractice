import React, { useState } from 'react'

function CountryState() {
   const [country, setCountry] = useState([
    "İstanbul",
    "Adana",
    "Ankara",
    "Tekirdağ",
    "Antalya",
    "Siirt",
    "Hakkari",
    "Bayburt",
    "Giresun",
    "Osmaniye",
    "Kilis"
])

    
    
    const listItems = country.map((country) =>
        <li>{country}</li>
      );
    

  return (<>
    <h1>Lenght: {country.length}</h1>
    <ul>{listItems}</ul>
    <button onClick={()=>setCountry([])}>Random</button>
    </>
  )
}

export default CountryState