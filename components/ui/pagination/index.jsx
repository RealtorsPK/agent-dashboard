import ReactPaginate from 'react-paginate';

const Pagination = ({ total, pageSize, onChange }) => (
    <ReactPaginate
        activeLinkClassName="text-white bg-background-primary"
        breakLabel="..."
        breakLinkClassName="flex no-underline w-[40px] h-[40px] text-text-secondary rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]"
        className="pl-0 inline-flex w-fit"
        nextLabel="Next"
        nextLinkClassName="text-text-primary no-underline flex px-[20px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]"
      // renderOnZeroPageCount={null}
        onPageChange={onChange}
        pageCount={Math.ceil(total / pageSize)}
        pageLinkClassName="flex text-text-primary no-underline w-[40px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]"
        pageRangeDisplayed={pageSize}
        previousLabel="Previous"
        previousLinkClassName="text-text-primary no-underline flex px-[20px] h-[40px] rounded-[4px] bg-[#fff] ml-[5px] mr-[5px] items-center justify-center border-[1px] border-border-primary text-[14px]"
    />
  );

export default Pagination;
