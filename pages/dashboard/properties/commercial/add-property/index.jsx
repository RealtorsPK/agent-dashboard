import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { defaultPropertyFormValues } from '../../../../../utilities/static-values';
import InnerForm from '../../../../../components/module/add-property';
import { addRcProperties } from '../../../../../services/rc-properties';
import { addPropertyPayload } from '../../../../../payloads/add-property';
import { addRrProperties } from '../../../../../services/rr-properties';
import { customToast, errorMessage } from '../../../../../utilities/helper-function';

const AddProperty = () => {
  const loginUser = useSelector((state) => state.loginDetails.login);
  const routes = useRouter();
  const [formdata, setFormdata] = useState({ ...defaultPropertyFormValues });
  const [loading, setLoading] = useState(false);
  const [socialLinks, setSocialLinks] = useState([{ url: '' }]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const onSubmit = () => {
    setLoading(true);

    // Adding Commercial Property
    if (formdata.propertyType === 'commercial') {
      // Add RC Property
      addRcProperties(
        addPropertyPayload({
          ...formdata,
          rcAgentId: loginUser.id,
          selectedFeatures,
          socialLinks,
        }),
      ).then(() => {
        setLoading(false);
        customToast('success', 'Commercial property added successfully.', 4000);
        routes.push('/dashboard/properties/commercial/listing');
      }).catch((error) => {
        errorMessage(error.response.data.message);

        setLoading(false);
      });
    }// Adding Residential Property
    else if (formdata.propertyType === 'residential') {
      // Add RR Property
      addRrProperties(
        addPropertyPayload({
          ...formdata,
          rcAgentId: loginUser.id,
          selectedFeatures,
          socialLinks,
        }),
      )
        .then(() => {
          setLoading(false);
          customToast('success', 'Residential property added successfully.', 4000);
          routes.push('/dashboard/properties/residential/listing');
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="h-[100%] overflow-scroll">
      <InnerForm
        formdata={formdata}
        loading={loading}
        onSubmit={onSubmit}
        selectedFeatures={selectedFeatures}
        setFormdata={setFormdata}
        setSelectedFeatures={setSelectedFeatures}
        setSocialLinks={setSocialLinks}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default AddProperty;
