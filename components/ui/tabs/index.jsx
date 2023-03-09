const Tabs = ({ options, value, onChange }) => (
  <div className="flex gap-[16px]">
    {
      options && options.length > 0 ?
        options.map((items) => (
          <button className={`text-[12px] font-medium p-[6px_15px] border-[1px] border-border-secondary rounded-[5px] ${value === items.value ? 'bg-background-primary text-white' : 'bg-white text-text-tertiary '}`} key={items.label} onClick={() => onChange(items.value)} type='button'>
            {items.label}
          </button>
        ))
        : null
    }
  </div>
);

export default Tabs;
