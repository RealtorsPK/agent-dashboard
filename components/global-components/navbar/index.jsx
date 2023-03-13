import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { arrowDown, loginUserIcon } from '../../../static-img-urls';
import { resizeImageUrl } from '../../../utilities/helper-function';
import { removeAddPropButtonOn } from '../../../utilities/static-values';
import NavDropdown from '../../ui/nav-drop-down';

const Navbar = () => {
  const { loginDetails } = useSelector((state) => state);
  const routes = useRouter();
  const [open, setOpen] = useState(false);

  const redirectTo = () => {
    const path = routes.asPath.includes('/residential/') ? 'add-residential-property' : 'add-commercial-property';

    routes.push(`/dashboard/properties/${path}`);
  };

  return (
    <div className="bg-white border-b-[1px] relative py-[11.5px] px-[20px] z-[25] flex justify-end gap-[20px]">
      {
        !removeAddPropButtonOn.includes(routes.asPath) &&
        <button className="bg-background-primary text-white p-[8px_18px] rounded-[6px] text-[14px]" onClick={() => redirectTo()} type="button">{'Add Property'}</button>
      }
      {/* Login Right side  */}
      {loginDetails.login &&
        <span className="relative">
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
