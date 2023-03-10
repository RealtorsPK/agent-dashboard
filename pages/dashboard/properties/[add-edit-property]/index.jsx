import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// import { defaultPropertyFormValues } from '../../../../utilities/static-values';
import { defaultPropertyFormValues } from '../../../../utilities/static-values';
import InnerForm from '../../../../components/module/add-property';
import { addRcProperties, getRcPropertyById } from '../../../../services/rc-properties';
import { addPropertyPayload, editPropertyPayload } from '../../../../payloads/add-property';
import { addRrProperties, getRrPropertyById } from '../../../../services/rr-properties';
import { customToast, errorMessage } from '../../../../utilities/helper-function';

const AddProperty = () => {
  const loginUser = useSelector((state) => state.loginDetails.login);
  const routes = useRouter();
  const [formdata, setFormdata] = useState({
    ...defaultPropertyFormValues,
    propertyType: routes.asPath.includes('residential') ? 'residential' : 'commercial',
  });
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

  useEffect(() => {
    if (routes.query['add-edit-property'].includes('edit') && routes.query.id) {
      if (routes.asPath.includes('commercial')) {
        getRcPropertyById(routes.query.id)
          .then((res) => {
            const editData = {
              ...editPropertyPayload(res.data),
              propertyType: 'commercial',
            };

            setFormdata(editData);
            setSelectedFeatures(editData.features);
            setSocialLinks(editData.socialLinks);
          });
      }
      else {
        getRrPropertyById(routes.query.id)
          .then((res) => {
            const editData = {
              ...editPropertyPayload(res.data),
              propertyType: 'commercial',
            };

            setFormdata(editData);
            setSelectedFeatures(editData.features);
            setSocialLinks(editData.socialLinks);
          });
      }
    }
  }, [routes]);

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
