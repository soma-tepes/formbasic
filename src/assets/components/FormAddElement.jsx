import React from 'react'
import '../styles/FormAddElement.css'
import { v4 as uuidv4 } from 'uuid';

const FormAddElement = ({setBaseData,setModal,setDataFinal,DATABASE_FINAL}) => {

    const handleSubmit =(e)=>{

        e.preventDefault()
      const  repeat = e.target.__EMPTY_3.value.toUpperCase()
       const norepeat = DATABASE_FINAL.some(e=>e.__EMPTY_4 == repeat)

       if(norepeat) {return alert ("This model is already in the database.")}
       // Add elementos  // 
        const data =
        {

           
            id : uuidv4(),
          __EMPTY : "Default",
          __EMPTY_1  : "Default",
          __EMPTY_2 : "Default",
          __EMPTY_3 : e.target.__EMPTY_4.value.toUpperCase(),
          __EMPTY_4 : e.target.__EMPTY_3.value.toUpperCase(),
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
        setDataFinal((element)=>[...element,data])
        setModal(false)
      }
   return (
 

<>
<div  className='modal'>
<div className='modal_content'>

  <form className='addForm' onSubmit={handleSubmit}>

 <span>Name</span> <input type="text" required name='__EMPTY_3'   placeholder='Model'/>
 <span>Description</span> <input type="text" required name='__EMPTY_4'   placeholder='Description'/>
 <span>QTY per Box</span> <input type="text" required name='__EMPTY_7'   placeholder='QTY per box'/>
 <span>QTY per  EMPY</span> <input type="text" required name='__EMPTY_10'   placeholder='Qty'/>
 <span>Price</span> <input type="text" required name='__EMPTY_11'   placeholder='Price'/>
 <select name="__EMPTY_16">
  <option value="">Eur</option>
  <option value="">Dol</option>
  <option value="">Mxn</option>
 </select>

 {/* <span></span> <input type="text" required name='__EMPTY_16'   placeholder='$$$'/>  */}
     <button>Send</button>
     <button className='modal_btn' onClick={()=>{setModal(false)}}>❌</button>
  </form>
  </div>
</div>
 
</>


    
  )
}

export default FormAddElement