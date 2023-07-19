import React, { useEffect, useState } from 'react'
import "../../styles/CrudForm.css"
const CrudForm = ({data, setBaseData, baseData,JoinBD}) => {

  const [editing, setEditing] = useState(null)


    const result = "Fin. Goods (Mass Prod.)";

     
  const handleEdit=()=>{
  
    setEditing(data.id)

  }

    const handleDelete =()=>{
      if (window.confirm("Are you sure?")) {
       const delet = baseData.filter(element => element.id != data.id)
       setBaseData(delet)}

       const updatedJoinBD = JoinBD.filter(item => item.id !== data.id);
      JoinBD = updatedJoinBD;
      
    }


  const current = baseData.find(element=> element.id == editing)


  const handleUpdate = (e) => {
    e.preventDefault();
  
    if (window.confirm("Are you sure?")) {
      
      const data = {
        id: current.id,
        __EMPTY: current.__EMPTY,
        __EMPTY_1: current.__EMPTY1,
        __EMPTY_2: current.__EMPTY2,
        __EMPTY_3: e.target.__EMPTY_3.value.toUpperCase(),
        __EMPTY_4: e.target.__EMPTY_4.value,
        __EMPTY_5: current.__EMPTY_5,
        __EMPTY_6: current.__EMPTY_6,
        __EMPTY_7: e.target.__EMPTY_7.value,
        __EMPTY_8: e.target.__EMPTY_8.value,
        __EMPTY_9: current.__EMPTY_9,
        __EMPTY_10: current.__EMPTY_10,
        __EMPTY_11: current.__EMPTY_11,
        __EMPTY_12: current.__EMPTY_12,
        __EMPTY_13: current.__EMPTY_13,
        __EMPTY_14: current.__EMPTY_14,
        __EMPTY_15: current.__EMPTY_15,
        __EMPTY_16: current.__EMPTY_16,
        __EMPTY_17: current.__EMPTY_17,
        __EMPTY_18: current.__EMPTY_18,
        __EMPTY_19: current.__EMPTY_19,
        __EMPTY_20: current.__EMPTY_20
      };
  
      const updateData = baseData.map((amulador) =>
        amulador.id == current.id ? data : amulador
      );
      setBaseData(updateData);
      setEditing(null);
    }
  };
  
  
  return (
   <>
     <div className='card'>

        <div className={`card_container  ${data.__EMPTY_11 != result ? 'subdataFinish' : 'subdadaAssy'}`}>

        {
        editing ? (
             <div className='formEditModal'>
               <div className='formContentModal'>
              <form  onSubmit={handleUpdate}>
               <span>Model</span><input required type='text' name='__EMPTY_4' defaultValue={current.__EMPTY_4} />
               <span>Description</span><input required type='text' name='__EMPTY_3'defaultValue={current.__EMPTY_3} />
               <span>QTY</span><input required type='text' name='__EMPTY_7' defaultValue={current.__EMPTY_7} />
               <input required type='text' name='__EMPTY_8' defaultValue={current.__EMPTY_8}  />
              <button >Update</button>
              <button onClick={(e)=> {  e.preventDefault(); setEditing(false)}}>Cancel</button>
              </form>
                 </div>
              
             </div>
           
          ) : (
            <ul>
              
              <li>{data.__EMPTY_4}</li>
              <li>{data.__EMPTY_3 ? data.__EMPTY_3 : 'N/A'}</li>
              <li>{data.__EMPTY_7 ? data.__EMPTY_7 : 'N/A'}</li>
              <li>{data.__EMPTY_8 ? data.__EMPTY_8 : 'N/A'}</li>
              
              <li>{data.__EMPTY_11 != result ? 'Assy' : 'Terminado'}</li> 
              
              <div className='card_btns'>
                <button className='card_btn' onClick={handleEdit}> Edit</button>
                <button className='card_btn' onClick={handleDelete} >  Delete </button>
              </div>
            </ul>
           )} 
        </div>
       {/*  {showModal ? (
          <Modal datos={data} elementoEncontrado={elementoEncontrado} handleClose={handleClose} />
        ) : null} */}
      </div>
   </>
  )
}

export default CrudForm