import Image from "next/image";
import { noData } from "../../../static-img-urls";

export const NoData = ({ className }) => (
  <span className="inline-block relative w-[200px] h-[200px]">
    <Image alt="No Data Found" className={className || ''} fill sizes='200px' src={noData} />
  </span>
)
