import ReactPaginate from 'react-paginate';

const Pagination = ({ total, pageSize, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Previous"
      onPageChange={onPageChange}
      pageRangeDisplayed={pageSize}
      pageCount={Math.ceil(total / pageSize)}
      // renderOnZeroPageCount={null}
      className='pl-0 inline-flex w-fit'
      previousLinkClassName='text-text-primary no-underline flex px-[20px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]'
      nextLinkClassName='text-text-primary no-underline flex px-[20px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]'
      breakLinkClassName='flex no-underline w-[40px] h-[40px] text-text-secondary rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]'
      pageLinkClassName='flex text-text-primary no-underline w-[40px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]'
      activeLinkClassName={'text-white bg-background-primary'}
    />
  )
}

export default Pagination;
