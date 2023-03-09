
const Radio = (props) => {
  const { placeholder, label, name, onChange, value, classes, checked } = props;

  return (
    <div>
      {
        label &&
        <div className="cursor-pointer">
          <span className="inline-block relative top-[3px]">
            <input
                checked={checked}
                className="opacity-[0] w-[16px] h-[16px] relative z-[2] peer cursor-pointer"
                id={label}
                name={name}
                onChange={(e) => onChange(e, name)}
                placeholder={placeholder}
                type="radio"
                value={value}
            />
            <span className="absolute grid items-center justify-center leading-[0] w-[16px] h-[16px] rounded-[50%] border-[1px] left-0 top-[1px] z-[1] bg-white peer-checked:border-border-secondary peer-checked:bg-[#EFEAF7] after:border-[transparent] after:absolute after:border-[3.5px] after:rounded-[50%] peer-checked:after:border-border-secondary after:left-[4px]" />
          </span>

          <label
              className={`${classes || ''} text-text-primary text-[14px] ml-[8px] cursor-pointer`}
              htmlFor={label}
          >
{label}
          </label>
        </div>
      }
    </div>
  );
};

export default Radio;
