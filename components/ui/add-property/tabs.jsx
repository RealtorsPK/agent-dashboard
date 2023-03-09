import { tabs } from "../../../utilities/static-values";

const Tabs = ({ onChange, selectedTab, validation }) => (
  <div className=" w-fit  rounded-[4px]">
    {
      tabs.map((item, key) => (
        <button className={`rounded-[5px] border-[1px] ${tabs.length - 1 !== key ? 'mr-[16px]' : ''} text-[14px] py-[6px] px-[24px] ${selectedTab === item.value ? 'bg-background-primary text-white border-[tranparent]' : validation ? 'text-text-primary border-[red] bg-white' : 'text-text-primary border-border-primary bg-white'}  hover:bg-background-primary hover:text-white hover:border-[tranparent]`} key={item.value} onClick={() => onChange(item.value, 'purpose')} type='button'>{item.label}</button>
      ))
    }
  </div>
)

export default Tabs;
