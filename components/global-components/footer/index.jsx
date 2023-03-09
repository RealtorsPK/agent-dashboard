
const Footer = () => {
  const date = new Date();
  return (
    <div className="text-[12px] text-text-secondary mt-[17px] leading-[0px]">
      {`${date.getFullYear()} © Realtorspk Marketplace Agent Board`}
    </div>
  )
};

export default Footer;
