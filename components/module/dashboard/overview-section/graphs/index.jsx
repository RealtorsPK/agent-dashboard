import PageHeading from '../../../../ui/page-heading';

const Graphs = () =>
  <div className="grid  md:grid-cols-3 gap-[24px]">
    <div className="border bg-[#ffff] shadow-[0px_1px_2px_rgba(16_24_40_0.05)] border-[#EEEEEE] rounded-[8px] p-[24px] col-span-2">
      <div>
        <PageHeading />
      </div>
      <div>
        {'Graph 1'}
      </div>
    </div>
    <div className=" col-span-1 border border-[#EEEEEE] rounded-[8px] p-[24px]">
      <div>
        <PageHeading />
      </div>
      <div>
        {'Graph 2'}
      </div>
    </div>
  </div>;

export default Graphs;
