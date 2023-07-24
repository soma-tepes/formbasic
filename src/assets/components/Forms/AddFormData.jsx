import React, { useEffect, useState } from 'react'
import ShowElementPagination from './ShowElementPagination';
import Pagination from './Pagination/Pagination';
import CrudForm from './CrudForm';
import FormAddElement from '../FormAddElement';
import BtnSearch from '../Funciones/BtnSearch';



const AddFormData = ({BaseData : JoinBD}) => {
   // Filter data Null
  const JoinBDjr = JoinBD.filter(e=> e.__EMPTY_1 && e.__EMPTY_4 != 'Material' ? e : false)

const [baseData, setBaseData] = useState(JoinBDjr)//valor modificable
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
    const handlePageChange = ({ selected }) => {
    setPagination(selected);
   
  };
//
  return (
    <div>

<div>
   <button onClick={()=>{setModal(true)}} className='dbCard_btn'>ADD MODEL ✔</button>
</div>
   
 < BtnSearch setBaseData={setBaseData} baseData={baseData} JoinBD={JoinBD} setPagination={setPagination}
    DATABASE_FINAL={DATABASE_FINAL} setDataFinal={setDataFinal} />
   

 <Pagination totalPages={totalPages} currentPage={pagination} onPageChange={handlePageChange} />

<ShowElementPagination showPage={showPage}/>
 
<Pagination totalPages={totalPages} currentPage={pagination} onPageChange={handlePageChange}/>


{ modal && 
 <FormAddElement setBaseData={setBaseData} setModal={setModal} setDataFinal={setDataFinal} 
 DATABASE_FINAL={DATABASE_FINAL}
 />} 

    </div>
  )
}

export default AddFormData