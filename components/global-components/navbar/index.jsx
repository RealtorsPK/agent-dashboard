import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { arrowDown, loginUserIcon } from '../../../static-img-urls';
import { resizeImageUrl } from '../../../utilities/helper-function';
import NavDropdown from '../../ui/nav-drop-down';

const Navbar = () => {
  const { loginDetails } = useSelector((state) => state);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-[rgb(0_0_0_/_5%)_9px_0px_5px_1px] relative py-[10px] px-[20px] z-[25]">

      {/* Logo Image */}
      <span className="relative w-[156px] h-[27px] inline-block">
        <Image
          alt="Logo Image"
          fill
          priority
          sizes="156px"
          src="https://dev.realtorspk.com/commercial/_next/static/media/logo.c8203836.svg"
        />
      </span>

      {/* Login Right side  */}
      {loginDetails.login &&
        <span className="inline-block absolute right-[20px] top-[6px]">
          <button
            className="border-[1px] text-left border-border-primary inline-block py-[7px] px-[7px] rounded-[5px] cursor-pointer"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span className="block leading-[0px]">
              <span className="relative inline-block w-[24px] h-[24px] mr-[6px] overflow-hidden rounded-[50%]">
                <Image
                  alt="Icon"
                  className="object-cover"
                  fill
                  sizes="24px"
                  src={loginDetails.login.profileImage ? resizeImageUrl(loginDetails.login.profileImage, 50) : loginUserIcon}
                />
              </span>

              <span className="relative -top-[3px] inline-block w-[12px] h-[16px]">
                <Image
                  alt="Icon"
                  fill
                  sizes="12px"
                  src={arrowDown}
                />
              </span>
            </span>
          </button>
          <NavDropdown
            isOpen={open}
            toggle={setOpen}
          />
        </span>}
    </div>
  );
};

export default Navbar;
