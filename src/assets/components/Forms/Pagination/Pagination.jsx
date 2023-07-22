import React from 'react'
import ReactPaginate from 'react-paginate'
import '../../../styles/Pagination.css'


const Pagination = ({totalPages,onPageChange,currentPage}) => {
  return (
    <div>
<ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={onPageChange}
  containerClassName={"navigationButtons"}
  previousLinkClassName={"previousButton"}
  nextLinkClassName={"nextButton"}
  disabledClassName={"navigationDisabled"}
  activeClassName={"navigationActive"}
  forcePage={currentPage}
/>
    </div>
  )
}

export default Pagination