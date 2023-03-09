import Image from 'next/image';

import { plusIcon } from '../../../static-img-urls';

const FileInput = ({ buttonLabel, label, multi, onChange, name, index, value, validation, validationMessage }) => (
    <div>
      {label && <label className="text-text-primary text-[14px] mb-[5px] block">{label}</label>}

      <div className="relative">

        {/* File Input */}
        <input
            className="block w-full absolute inset-0 z-[2] opacity-0"
            multiple={multi}
            name={name}
            onChange={(e) => onChange(e, name, index)}
            type="file"
        />

        {/* Display Button */}
        <button
            className="relative z-[1] bg-white py-[10.5px] block w-full pl-[56px] text-[14px] rounded-[6px] border-[1px] border-border-primary text-text-secondary overflow-hidden"
            type="button"
        >
          <span className="inline-grid items-center justify-center absolute left-0 top-0 bottom-0 w-[46px] border-r-[1px] border-border-primary bg-[#f5f5f5]">
            <span className="inline-block relative h-[11.67px] w-[11.67px]">
              <Image
                  alt="Plus Icon"
                  layout="fill"
                  src={plusIcon}
              />
            </span>
          </span>
          {
            value.length <= 0 ?
              buttonLabel
              :
              <span className="text-[12]">
{value.length}
{' '}
{value.length > 1 ? 'Images' : 'Image'}
{' '}
{'selected'}
              </span>
          }
        </button>

      </div>

      {validation ? <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</p> : ''}
    </div>
  );

export default FileInput;
