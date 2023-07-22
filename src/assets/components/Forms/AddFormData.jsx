import React, { useEffect, useState } from 'react'
import ShowElementPagination from './ShowElementPagination';
import Pagination from './Pagination/Pagination';
import CrudForm from './CrudForm';
import FormAddElement from '../FormAddElement';
import BtnSearch from '../Funciones/BtnSearch';



const AddFormData = ({BaseData : JoinBD}) => {

const [baseData, setBaseData] = useState(JoinBD)//valor modificable
const [pagination, setPagination] = useState(0)
const [modal, setModal] = useState(false)
const [DATABASE_FINAL,setDataFinal] = useState(baseData) 

//Pagination 

const elementoxpagina = 20;
const numerodepaginasvisitadas = pagination * elementoxpagina;
const totalPages = Math.ceil(DATABASE_FINAL.length / elementoxpagina);
const  showPage = DATABASE_FINAL
  .slice(numerodepaginasvisitadas,numerodepaginasvisitadas + elementoxpagina)
  .map((data) => 
  <CrudForm data={data} key={data.id} setBaseData={setBaseData} baseData={baseData} JoinBD={JoinBD}
  setPagination={setPagination} setDataFinal={setDataFinal} DATABASE_FINAL={DATABASE_FINAL}
  />
  );
    const changepage = ({ selected }) => {
    setPagination(selected);
  };
//
  return (
    <div>

<div> <button onClick={()=>{setModal(true)}} className='dbCard_btn'>ADD MODEL ✔</button></div>
   
 <BtnSearch setBaseData={setBaseData} baseData={baseData} JoinBD={JoinBD} setPagination={setPagination}
 DATABASE_FINAL={DATABASE_FINAL} setDataFinal={setDataFinal} />
   

 <Pagination totalPages={totalPages} changepage={changepage} />

<ShowElementPagination showPage={showPage}/>
 
<Pagination totalPages={totalPages} changepage={changepage}/>
{ modal && <FormAddElement setBaseData={setBaseData} setModal={setModal} setDataFinal={setDataFinal} />} 

    </div>
  )
}

export default AddFormData