import React from 'react'
import '../../styles/ShowElementPagination.css'

const ShowElementPagination = ({showPage}) => {


  return (
     
    <article className='containerShowData' >
      
      {showPage.length>0 ? showPage : ""}
      
      </article>
  )
}

export default ShowElementPagination