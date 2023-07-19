import React from 'react'
import '../styles/FormAddElement.css'
import { v4 as uuidv4 } from 'uuid';

const FormAddElement = ({setBaseData,setModal}) => {

    const handleSubmit =(e)=>{

        e.preventDefault()
      
       // Add elementos  // 
        const data =
        {

           
            id : uuidv4(),
          __EMPTY : "Default",
          __EMPTY_1  : "Default",
          __EMPTY_2 : "Default",
          __EMPTY_3 : e.target.__EMPTY_3.value.toUpperCase(),
          __EMPTY_4 : e.target.__EMPTY_4.value.toUpperCase(),
          __EMPTY_5 : "Default",
          __EMPTY_6 : "Default",
          __EMPTY_7 : e.target.__EMPTY_7.value.toUpperCase(),
          __EMPTY_8 : "Default",
          __EMPTY_9 : "Default",
          __EMPTY_10 : e.target.__EMPTY_10.value.toUpperCase(),
          __EMPTY_11 : e.target.__EMPTY_11.value.toUpperCase(),
          __EMPTY_12 : "Default",
          __EMPTY_13 : "Default",
          __EMPTY_14 : "Default",
          __EMPTY_15 : "Default",
          __EMPTY_16 : e.target.__EMPTY_16.value.toUpperCase(),
          __EMPTY_17 : "Default",
          __EMPTY_18 : "Default",
          __EMPTY_19 : "Default",
          __EMPTY_20: "Default"
        }
      
        setBaseData((element)=>[...element,data])
        setModal(false)
      }
   return (
 

<>
<div  className='modalForm'>

  <form onSubmit={handleSubmit}>

     <input type="text" required name='__EMPTY_3'/><br />
     <input type="text" required name='__EMPTY_4'/><br />
     <input type="text" required name='__EMPTY_7'/><br />
     <input type="text" required name='__EMPTY_10'/><br />
     <input type="text" required name='__EMPTY_11'/><br />
     <input type="text" required name='__EMPTY_16'/><br />
     <button>Send</button>
  </form>
</div>
 
</>


    
  )
}

export default FormAddElement