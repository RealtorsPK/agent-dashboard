// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable node/prefer-global/process */

import Image from "next/image";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

import { loginUserIcon } from "../../../static-img-urls";
import { resizeImageUrl } from "../../../utilities/helper-function";

const NavDropdown = ({ isOpen, toggle }) => {
  const { loginDetails } = useSelector((state) => state);
  const cookies = new Cookies();
  const { login } = loginDetails;

  const logout = () => {
    toggle(false);
    cookies.remove('token', { path: '/' });
    window.open(process.env.NEXT_PUBLIC_COMMERCIAL_SITE + '?logout=true', '_self')
  }

  const redirectTo = (url) => {
    toggle(false);
    window.open(`${url}?token=${cookies.get('token')}`, '_blank')
  }

  return (
    <div className={`drop ${isOpen} ${isOpen ? 'block' : 'hidden'} absolute right-0 top-[calc(100%+8px)] bg-white rounded-[8px] border-[1px] border-border-primary w-[240px]`}>

      {/* Dropdown Header */}
      <div className="px-[16px] py-[12px] relative pl-[70px] min-h-[65px] border-b-[1px] border-[#F2F4F7]">
        <span className="absolute left-[16px] top-[12px] inline-block w-[40px] h-[40px] overflow-hidden rounded-[50%]">
          <Image alt='Icon' fill sizes={'40px'} src={login.profileImage ? resizeImageUrl(login.profileImage, 100) : loginUserIcon} />
        </span>
        <label className="block w-full capitalize text-text-primary truncate text-ellipsis text-[14px] leading-[18px] mt-[3px] font-medium">{login.firstname} {login.lastname}</label>
        <p className="text-[14px] truncate text-ellipsis text-text-secondary leading-[18px]" title={login.email ? login.email : login.mobileNo}>{login.email ? login.email : login.mobileNo}</p>
      </div>

      {/* Items list */}
      <div className="px-[16px]">
        <button className="py-[12px] text-[14px] block w-full text-left text-text-primary cursor-pointer font-medium" onClick={() => redirectTo(`${process.env.NEXT_PUBLIC_RCAGENT_DASHBOARD}properties`)} type='button'>{'Dashboard'}</button>
        <button className="py-[12px] text-[14px] block w-full text-left text-text-primary cursor-pointer font-medium" onClick={() => redirectTo(`${process.env.NEXT_PUBLIC_RCAGENT_DASHBOARD}leads`)} type='button'>{'View Leads'}</button>
        <button className="py-[12px] text-[14px] block w-full text-left text-text-primary cursor-pointer font-medium" onClick={() => redirectTo(`${process.env.NEXT_PUBLIC_RCAGENT_DASHBOARD}properties`)} type='button'>{'Property Listing'}</button>
        <button className="py-[12px] text-[14px] block w-full text-left text-text-primary cursor-pointer font-medium" onClick={() => redirectTo(`${process.env.NEXT_PUBLIC_RCAGENT_DASHBOARD}changePassword`)} type='button'>{'Change Password'}</button>
      </div>

      {/* Logout Button */}
      <button className="px-[16px] py-[12px] text-[14px] block w-full text-left text-[#F04438] border-t-[1px] border-[#F2F4F7] cursor-pointer font-medium" onClick={() => logout()} type='button'>{'Log out'}</button>
    </div>
  )
}

export default NavDropdown;