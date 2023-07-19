import React, { useState } from 'react'

const BtnSearch = ({setBaseData,JoinBD}) => {

    const [inputSearch, setInputSearch] = useState("")

const handleSearch = (e)=>{
    e.preventDefault()
    
    
  const x = JoinBD.filter(data => {
    const value = data.__EMPTY_4;
    const value2 = data.__EMPTY_7;
    const value3 = data.__EMPTY_3;
    const input = inputSearch.trim().toLowerCase();
     return (typeof value === 'string' && value.trim().toLowerCase() === input) ||
           (typeof value === 'number' && value === parseInt(input, 10)) ||
           (typeof value2 === 'string' && value2.trim().toLowerCase() === input) ||
           (typeof value2 === 'number' && value2 === parseInt(input, 10)) ||
           (typeof value3 === 'string' && value3.trim().toLowerCase() === input) ||
           (typeof value3 === 'number' && value3 === parseInt(input, 10))
  })
  
  if(inputSearch){
    if(x.length>0){
        setBaseData(x)
        
    }else{setBaseData([])}
  }
  else{setBaseData(JoinBD)}
}
    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" value={inputSearch} onChange={(e)=>{setInputSearch(e.target.value)}} />
                <button>Search!</button>
            </form>
        </>
    )
}

export default BtnSearch