import { useState } from "react";
import { useSelector } from "react-redux";
import { defaultPropertyFormValues } from "../../../../../utilities/static-values";
import InnerForm from "../../../../../components/module/add-property";

const AddProperty = () => {
  const loginUser = useSelector((state) => state.loginDetails.login);
  const [formdata, setFormdata] = useState({ ...defaultPropertyFormValues });
  const [loading, setLoading] = useState(false);
  const [socialLinks, setSocialLinks] = useState([{ url: '' }]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);


  const onSubmit = (userId) => {
    // const loginUserId = userId ? userId : loginUser.id

    setLoading(true);
    setOpen(false);

    // Adding Commercial Property
    if (formdata.propertyType === 'commercial') {

      // Add RC Property
      // addRCProperty(
      //   addPropertyPayload({
      //     ...formdata,
      //     rcAgentId: loginUserId,
      //     selectedFeatures,
      //     socialLinks,
      //   })
      // )
      //   .then(() => {
      //     setLoading(false);
      //     customToast('success', 'Property added please login into dashboard.', 4000)
      //     window.open(`${process.env.NEXT_PUBLIC_RCAGENT_DASHBOARD}properties`, '_blank');
      //     window.open('/commercial', '_self')
      //   })
      //   .catch(() => {
      //     setLoading(false)
      //   });
    }

  }


  return (
    <div className="h-[100%] overflow-scroll">
      <InnerForm
        formdata={formdata}
        loading={loading}
        // loginUserFun={ifUserIsNotLogin}
        onSubmit={onSubmit}
        selectedFeatures={selectedFeatures}
        setFormdata={setFormdata}
        setSelectedFeatures={setSelectedFeatures}
        setSocialLinks={setSocialLinks}
        socialLinks={socialLinks}
      />
    </div>
  )
};

export default AddProperty;
