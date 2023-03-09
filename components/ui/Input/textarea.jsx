
const Textarea = (props) => {
  const { placeholder, label, name, onChange, value, classes, rows } = props;

  return (
    <div>
      <label className="text-text-primary text-[14px] font-medium mb-[5px] block">{label}</label>
      <textarea
          className={`${classes || ''} font-regular text-[14px] placeholder:text-[#888] text-[#2a2a2a] border-[#ddd] border-[1px] pl-[15px] shadow-[0_0_3px_1px_rgba(0,0,0,0.03)] rounded-[5px] w-full py-[10.5px] outline-0 hover:border-[#732DD9] focus-visible:border-[#732DD9] focus-visible:shadow-[0_0_1px_4px_#f0e7fb]`}
          name={name}
          onChange={(e) => {
 onChange(e, name);
}}
          placeholder={placeholder}
          rows={rows || '4'}
          value={value}
      />
    </div>
  );
};

export default Textarea;
