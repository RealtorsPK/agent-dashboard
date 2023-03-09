import { useState } from "react";

import { currencyFormat } from "../../../utilities/numbers";

const Range = (props) => {
  const { placeholder, label, name, onChange, value, min, max, classes, valueType } = props
  const [range, setRange] = useState(value)
  const fill = Math.round((range / max) * 100)

  return (
    <div>
      <label className="text-text-primary relative text-[14px] font-semibold mb-[0px] min-h-[36px] grid items-center">
        {label}

        <span className="absolute right-0 border-[1px] border-[#ddd] bg-white rounded-[5px] text-[14px] py-[6px] px-[10px] font-semibold">
          {
            valueType === 'years' ?
              `${value} Year${value > 1 ? 's' : ''}`
              :
              valueType === '%' ?
                `${value} %`
                :
                currencyFormat(value)
          }
        </span>
      </label>

      <div className="relative grid items-center">
        <span className={`absolute h-[2px] bg-[#732DD9] `} style={{ width: `${fill}%` }} />
        <input
          className={`w-full h-[2px] mb-6 bg-[#DDDDDD] appearance-none cursor-pointer ${classes || ''}`}
          max={max}
          min={min}
          name={name}
          onChange={(e) => {
            onChange(name, e.target.value);
            setRange(e.target.value)
          }}
          placeholder={placeholder}
          type='range'
          value={value}
        />
      </div>
    </div>
  )
}

export default Range;
