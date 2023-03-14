import Image from 'next/image';

const OverViewCard = ({ overViewCardsData }) =>
  overViewCardsData && overViewCardsData.length > 0 ? overViewCardsData.map((data) => (
    <div className="first:bg-[#F9F5FF] bg-[#ECFDF3]  rounded-[8px] p-[19px_16px] relative border border-[##F4EBFF] last:bg-[#EFF8FF]" key={data.id}>
      <div>
        <p className="font-[inter] font-normal text-[14px] leading-[20px] text-[#2A2A2A]">{data.title}</p>
        <p className="font-[inter] mt-[5px] font-medium text-[20px] leading-[20px] text-[#2A2A2A]">{data.quantity}</p>
      </div>
      <div className="absolute top-[17px] right-[16px]  bg-[#FECDCA] flex justify-center content-center p-[12px] rounded-[50%] w-[54px] h-[54px]">
        <span className="h-[28px] w-[29px] absolute ">
          <Image
            fill
            sizes="29px"
            src={data.icon}
          />
        </span>
      </div>
    </div>
  )) : undefined;

export default OverViewCard;
