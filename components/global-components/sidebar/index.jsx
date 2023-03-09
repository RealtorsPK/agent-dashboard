import { useRouter } from "next/router";
import { useState } from "react";
import buttons from "./buttons";

const SideBar = () => {
  const routes = useRouter();
  const [active, setActive] = useState(routes.asPath);
  const [toggleDropdown, setToggleDropdown] = useState('Commercial');

  const goToUrl = (url, item) => {
    routes.push(url);
    if (item) {
      setActive(item.url)
    }
  }

  const toggleDropdownFun = (item) => {
    setToggleDropdown(item.title)
  }


  return (
    <div className="bg-white min-h-[calc(100vh-60px)] py-[20px]">
      {
        buttons.map((items) => (
          <div className={`${toggleDropdown === items.title ? '' : 'h-[41px]'} overflow-hidden transition ease-in-out duration-500`} key={items.title}>
            <button className={`block w-full text-left text-[14px] py-[10px] px-[20px] ${items.url === active ? 'text-[#000] font-medium' : 'text-[#888888]'}`} onClick={() => items.subMenu ? toggleDropdownFun(items) : goToUrl(items.url, items)} type='button'>
              {items.title}
            </button>

            {
              items.subMenu ?
                items.subMenu.map((subItems) => (
                  <div key={subItems.title}>
                    <button className="block w-full text-left text-[14px] mb-[10px] px-[20px] ml-[15px] text-[#888888]" onClick={() => goToUrl(subItems.url, items)} type='button'>{subItems.title}</button>
                  </div>
                )) : null
            }
          </div>
        ))
      }
    </div>
  );
};

export default SideBar;
