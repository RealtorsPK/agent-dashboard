import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { customToast } from "../../../utilities/helper-function";
import { Loader } from "../../ui/loader";
import AddPropertyFormStructure from "../../ui/add-property/property-form-structure";

import Aminities from "./aminities";
import PropertyDetails from "./property-details";
import PropertyLocation from "./property-location";
import YoutubeUrls from "./youtube-urls";
import Media from "./media";

const InnerForm = ({ onSubmit, loading, loginUserFun, formdata, setFormdata, socialLinks, setSocialLinks, selectedFeatures, setSelectedFeatures }) => {
  const loginUser = useSelector((state) => state.loginDetails.login);
  const routes = useRouter();

  const [validation, setValidation] = useState(false);
  const { propertyType, categoryId } = formdata

  const addProperty = () => {
    if (loginUser) {
      onSubmit()
    }
    else {
      customToast('info', 'Sign in / Sign up to add property.', 3000)
      loginUserFun();
    }
  }

  const submit = () => {
    const { title, areaId, cityId, purpose, sizeUnit, size, price, latitude, longitude, display, cover, image, bed, bath } = formdata
    const isValid = title && categoryId && areaId && cityId && purpose && sizeUnit && size && price && latitude && longitude && display.length > 0 && cover.length > 0 && image.length > 0

    // Check For Commercial And Residential Property
    if (propertyType === 'commercial') {
      if (isValid) {
        addProperty()
      }
      else {
        setValidation(true);
      }
    }

    else if (isValid && bath && bed) {
      addProperty()
    }
    else {
      setValidation(true);
    }
  }

  const cancel = () => {
    routes.push('/')
  }

  return (
    <div>

      <div className="grid gap-y-[16px] bg-white p-[15px] md:p-[24px_32px] mb-[8px] md:mb-[24px] rounded-[0px] md:rounded-[10px] shadow-[0_1px_5px_1px_rgba(0,0,0,0.02)]">
        {/* Property Details */}
        <AddPropertyFormStructure heading='Add Property Details'>
          <PropertyDetails formdata={formdata} setFormdata={setFormdata} validation={validation} />
        </AddPropertyFormStructure>

        {/* Location */}
        <AddPropertyFormStructure heading='Add Property Location'>
          <PropertyLocation formdata={formdata} setFormdata={setFormdata} validation={validation} />
        </AddPropertyFormStructure>

        {/* Property Images */}
        <AddPropertyFormStructure heading='Add Your Property Images'>
          <Media formdata={formdata} setFormdata={setFormdata} validation={validation} />
        </AddPropertyFormStructure>

        {/* Amenities */}
        <AddPropertyFormStructure heading='Add Amenities'>
          <Aminities categoryId={categoryId} selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} />
        </AddPropertyFormStructure>

        {/* Youtube URLs */}
        <AddPropertyFormStructure heading='Add Property Video URL'>
          <YoutubeUrls links={socialLinks} setSocialLinks={setSocialLinks} />
        </AddPropertyFormStructure>
      </div>

      {/* Submit Buttons */}
      <div className="md:text-right px-[10px] md:p-[0px]">
        <button className="text-[14px] mr-[15px] border-[1px] border-border-primary py-[10.5px] px-[20px] rounded-[5px] bg-white hidden md:inline-block" onClick={() => cancel()} type="button">{'Cancel'}</button>
        <button className="text-[14px] border-[1px] border-border-primary py-[10.5px] px-[20px] rounded-[5px] bg-background-primary text-white capitalize w-full md:w-fit" onClick={() => !loading && submit()} type="button">
          {loading ? <Loader /> : `Submit ${propertyType} Property`}
        </button>
      </div>
    </div >
  )
}

export default InnerForm;
