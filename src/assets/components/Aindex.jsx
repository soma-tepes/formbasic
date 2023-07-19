import React from 'react'
import ModelDB from '../../basedatas/bdmodels.json'
import PriceBD from '../../basedatas/bdprices.json'
import AddFormData from './Forms/AddFormData'
import { v4 as uuidv4 } from 'uuid';

const Aindex = () => {

 
let SemiBase = []
PriceBD.forEach(element => {
  ModelDB.forEach(element2 => {
   
     if(element2['__EMPTY_3'] == element['__EMPTY_4'])
     {  
         let joinMerge ={ ...element, ...element2}
         SemiBase.push(joinMerge)
     }
  })
});
SemiBase.forEach(element => {element.id ? element.id : element.id = uuidv4()});  



  return (
   <>
    <AddFormData BaseData={SemiBase}/>
   
   </>
  )
}

export default Aindex