import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { buttons } from './buttons';

const SideBar = () => {
  const routes = useRouter();
  const [active, setActive] = useState(routes.asPath);
  const [toggleDropdown, setToggleDropdown] = useState('Commercial');

  const goToUrl = (url, item) => {
    routes.push(url);

    if (item) {
      setActive(item.url);
    }
  };

  const toggleDropdownFun = (item) => {
    setToggleDropdown(item.title);
  };

  return (
    <div className="bg-[#f5f5f5] border-r-[1px] min-h-[calc(100vh)]">
      <div className="px-[24px] py-[32px]">
        <span className="relative w-[184px] max-w-[100%] h-[30px] inline-block">
          <Image
            alt="Logo Image"
            fill
            priority
            sizes="156px"
            src="https://dev.realtorspk.com/commercial/_next/static/media/logo.c8203836.svg"
          />
        </span>
      </div>
      {
        buttons.map((items) => (
          <div
            className={`${toggleDropdown === items.title ? '' : 'h-[36px]'} px-[20px] ${items.subMenu && items.url === active ? 'bg-[#fafafa]' : 'text-[#888888]'} overflow-hidden transition ease-in-out duration-500`}
            key={items.title}
          >
            <button
              className={`block w-[100%] text-left text-[14px] py-[7px] px-[15px] pl-[40px] rounded-[6px] ${!items.subMenu && items.url === active ? ' text-text-tertiary bg-[#E5DCF1]' : 'text-text-primary bg-transparent'} hover:text-text-tertiary hover:bg-[#E5DCF1]`}
              onClick={() => items.subMenu ? toggleDropdownFun(items) : goToUrl(items.url, items)}
              type="button"
            >
              {items.title}
            </button>

            {
              items.subMenu ?
                items.subMenu.map((subItems) => (
                  <div className="pl-[40px]" key={subItems.title}>
                    <button
                      className="block w-full text-left text-[14px] py-[7px] px-[15px] text-[#888888] rounded-[6px] hover:text-text-tertiary hover:bg-[#E5DCF1]"
                      onClick={() => goToUrl(subItems.url, items)}
                      type="button"
                    >
                      {subItems.title}
                    </button>
                  </div>
                )) : undefined
            }
          </div>
        ))
      }
    </div>
  );
};

export default SideBar;
