import React, { useState } from 'react'
import ShowElementPagination from './ShowElementPagination';
import Pagination from './Pagination/Pagination';
import CrudForm from './CrudForm';
import FormAddElement from '../FormAddElement';
import BtnSearch from '../Funciones/BtnSearch';



const AddFormData = ({BaseData : JoinBD}) => {

const [baseData, setBaseData] = useState(JoinBD)
const [pagination, setPagination] = useState(0)
const [modal, setModal] = useState(false)



//Pagination 

const elementoxpagina = 20;
const numerodepaginasvisitadas = pagination * elementoxpagina;
const totalPages = Math.ceil(baseData.length / elementoxpagina);
const  showPage = baseData
  .slice(numerodepaginasvisitadas,numerodepaginasvisitadas + elementoxpagina)
  .map((data) => 
  <CrudForm data={data} key={data.id} setBaseData={setBaseData} baseData={baseData} JoinBD={JoinBD}
  setPagination={setPagination}
  />
  );
    const changepage = ({ selected }) => {
    setPagination(selected);
  };
//
  return (
    <div>

<div> <button onClick={()=>{setModal(true)}} className='dbCard_btn'>ADD MODEL ✔</button></div>
   
 <BtnSearch setBaseData={setBaseData} baseData={baseData} JoinBD={JoinBD} setPagination={setPagination}/>
   

 <Pagination totalPages={totalPages} changepage={changepage}/>

<ShowElementPagination showPage={showPage}/>
 

{ modal && <FormAddElement setBaseData={setBaseData} setModal={setModal}/>} 

    </div>
  )
}

export default AddFormData