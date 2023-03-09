import InputField from "../../ui/Input";
import SelectBox from "../../ui/Input/selectbox";
import CategoryButton from "../../ui/add-property/category-buttons";
import RadioButtons from "../../ui/add-property/radio-buttons";
import Textarea from "../../ui/Input/textarea";
import Tabs from "../../ui/add-property/tabs";
import { baths, bedrooms, unitSizes } from "../../../utilities/static-values";
import { priceFormat } from "../../../utilities/helper-function";

const PropertyDetails = ({ formdata, setFormdata, validation }) => {
  const { title, sizeUnit, size, description, purpose, categoryId, propertyType, bed, bath, price, address } = formdata

  const onChange = (event, name) => {
    const newFD = { ...formdata }

    if (name === 'propertyType') {
      newFD.categoryId = ''
    }

    newFD[name] = event.target ? event.target.value : event

    setFormdata(newFD);
  }

  return (
    <div>
      {/* Tabs */}
      <div className="mb-[30px]">
        <label className="text-[14px] font-medium text-text-primary mb-[8px] block leading-[20px]">{'Purpose'}</label>
        <Tabs onChange={onChange} selectedTab={purpose} />
      </div>

      {/* Property Types */}
      <div className="mb-[15px]">
        <label className="text-[14px] font-medium text-text-primary mb-[8px] block leading-[20px]">{'Property Type'}</label>
        <RadioButtons onChange={onChange} selectedType={propertyType} />
      </div>

      {/* Categories */}
      <div>
        <CategoryButton onChange={onChange} propertyType={propertyType} selectedCategory={categoryId} validation={validation && !categoryId} />
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[24px] mt-[24px]">
        <div>
          <InputField label='Property Title' name='title' onChange={onChange} placeholder='Enter Title' validation={validation && !title} value={title} />
        </div>

        {/* Size */}
        <div className="relative">
          <InputField label='Size' name='size' onChange={onChange} placeholder='Enter Size' validation={validation && !size} value={size} >

            {/* Unit Size */}
            <div className="absolute right-[1px] top-[1px] bottom-0 h-[100%]">
              <SelectBox isNewOnchange name='sizeUnit' onChange={onChange} options={unitSizes} placeholder='Unit'
                style={{
                  bg: '#F5F5F5',
                  border: '0px',
                  br: '0px 5px 5px 0px',
                  height: '42px',
                }}
                validation={validation && !sizeUnit} value={sizeUnit} />
            </div>

          </InputField>
        </div>

        {/* Bedrooms */}
        {
          propertyType === 'residential' ?
            <div>
              <SelectBox isNewOnchange label='Bedrooms' name='bed' onChange={onChange} options={bedrooms} placeholder='Select Bedrooms' validation={validation && propertyType === 'residential' && !bed} />
            </div>
            :
            undefined
        }

        {/* baths */}
        {
          propertyType === 'residential' ?
            <div>
              <SelectBox isNewOnchange label='Baths' name='bath' onChange={onChange} options={baths} placeholder='Select Baths' validation={validation && propertyType === 'residential' && !bath} />
            </div>
            :
            undefined
        }

        {/* Price */}
        <div>
          <InputField label='Price' name='price' onChange={onChange} placeholder='Enter Price' type='number' validation={validation && !price} value={price}>
            <span className="absolute right-[1px] top-[1px] bottom-[1px] rounded-[0px_5px_5px_0px] text-[12px] text-text-primary grid items-center justify-center px-[15px] bg-[#f5f5f5]">
              {priceFormat(price)}
            </span>
          </InputField>
        </div>

        {/* Address */}
        <div>
          <InputField label='Address' name='address' onChange={onChange} placeholder='Enter Address' value={address} />
        </div>
      </div>

      {/* Description */}
      <div className="mt-[24px]">
        <Textarea label='Description' name='description' onChange={onChange} placeholder='Description' value={description} />
      </div>

    </div>
  )
}

export default PropertyDetails;