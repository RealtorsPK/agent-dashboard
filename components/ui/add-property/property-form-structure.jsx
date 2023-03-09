
const AddPropertyFormStructure = ({ children, heading }) => (
  <div className="md:flex mb-[8px] md:mb-0">
    <div className="w-full md:w-[30%] mb-[10px] md:mb-0">
      <label className="text-[16px] md:text-[18px] font-semibold leading-[20px] text-text-primary">{heading}</label>
    </div>
    <div className="w-full md:w-[70%]">
      <div className=" bg-[#fafafa] p-[16px] md:p-[20px] rounded-[8px]">
        {children}
      </div>
    </div>
  </div>
)

export default AddPropertyFormStructure;