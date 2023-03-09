import Image from 'next/image';
import Select, { components } from 'react-select';

import { arrowDown } from '../../../static-img-urls';

const DropdownIndicator = (props) => components.DropdownIndicator && (
  <components.DropdownIndicator {...props}>
    <div className="relative w-[10px] h-[10px] mr-[5px]">
      <Image
          alt="Arrow Down"
          className={`text-text-secondary ${props.selectProps.menuIsOpen && '-rotate-180'} transition ease-in-out duration-300`}
          layout="fill"
          priority
          src={arrowDown.src}
      />
    </div>
  </components.DropdownIndicator>
);

const SelectBox = (props) => {
  const { placeholder, label, name, onChange, value, options, validation, classes, disabled, isNewOnchange, validationMessage } = props;
  let { style } = props;

  style = {
    bg: '#fff',
    border: '1px',
    br: '5px',
    height: '44px',
    menuWidth: '100%',
    width: '100%',
    ...style,
  };

  const styling = {
    control: (base, state) => ({
      ...base,
      '&:focus': {
        border: `${style.border} solid #732DD9 !important`,
      },
      '&:hover': {
        border: `${style.border} solid #732DD9 !important`,
      },
      backgroundColor: style.bg,
      border: `${style.border} solid ${state.isFocused ? '#732DD9' : '#ddd'}`,
      borderColor: '#D0D5DD',
      borderRadius: style.br,
      boxShadow: `0 0 0  ${state.isFocused ? '5px' : '0px'} #f4ebff !important`,
      color: '#888888',
      fontSize: '14px',
      height: style.height,
      width: style.width,
    }),
    menu: (base) => ({
      ...base,
      width: style.menuWidth,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F9FAFB' : undefined,
      color: state.isSelected ? '#2a2a2a' : undefined,
    }),
  };

  const onChangeFun = (inputName, e) => {
    if (isNewOnchange) {
      onChange(e, inputName);
    } else {
 onChange(inputName, e);
}
  };

  return (
    <div>
      {label && <label className="text-text-primary text-[14px] mb-[5px] block">{label}</label>}
      <Select
          className={`${classes || ''} font-regular text-[14px]`}
          components={{
          DropdownIndicator,
          IndicatorSeparator: () => undefined,
        }}
          instanceId={name}
          isDisabled={disabled}
          name={name}
          onChange={(e) => {
 onChangeFun(name, e);
}}
          options={options}
          placeholder={placeholder}
          styles={styling}
          value={value}
      />

      {validation ? <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</p> : ''}

    </div>
  );
};

export default SelectBox;
