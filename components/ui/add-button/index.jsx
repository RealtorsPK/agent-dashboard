import Image from "next/image";
import { plusIcon } from "../../../static-img-urls";

export const AddButton = ({ onClick }) => (
  <button className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] grid items-center justify-center rounded-[50%] bg-background-primary z-[10] shadow-[rgb(0_0_0_/_9%)_20px_0px_20px_2px]" type="button" onClick={() => onClick()}>
    <span className="inline-block filt relative w-[20px] h-[20px] invert">
      <Image alt="Plus Icon" fill sizes="20px" src={plusIcon} />
    </span>
  </button>
);
