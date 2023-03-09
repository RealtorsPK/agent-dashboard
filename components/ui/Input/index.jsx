
const InputField = (props) => {
  const { placeholder, label, name, index, onChange, value, classes, type, validation, validationMessage, children } = props

  return (
    <div>
      {label && <label className="text-text-primary text-[14px] mb-[5px] block">{label}</label>}
      <div className="relative">
        <input
          className={`${classes || ''} font-regular text-[14px] placeholder:text-[#888] text-[#2a2a2a] border-[#ddd] border-[1px] pl-[15px] shadow-[0_2px_3px_1px_rgba(0,0,0,0.01)] rounded-[6px] w-full py-[10.5px] outline-0 focus-visible:border-[#732DD9] focus-visible:shadow-[0_0_1px_4px_#f0e7fb]`}
          name={name}
          onChange={(e) => onChange(e, name, index)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {children}
      </div>

      {validation ? <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</p> : ''}
    </div>
  )
}

export default InputField;
