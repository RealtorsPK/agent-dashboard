import { useState, useEffect } from 'react';

import { fetchAreas } from '../../../Services/areas';
import { fetchCities } from '../../../Services/cities';
import { selectBoxOptions } from '../../../utilities/helper-function';
import InputField from '../../ui/Input';
import SelectBox from '../../ui/Input/selectbox';

const PropertyLocation = ({ formdata, setFormdata, validation }) => {
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const { latitude, longitude, cityId, areaId } = formdata;

  const onChange = (event, name) => {
    const newFD = { ...formdata };

    if (name === 'cityId') {
      fetchAreas(`?cityId=${event.value}`)
        .then((res) => {
          setAreas(selectBoxOptions(res.data.items, 'name', 'id'));
        });
    }

    newFD[name] = event.target ? event.target.value : event;

    setFormdata(newFD);
  };

  useEffect(() => {
    fetchCities('?all=true')
      .then((res) => {
        setCities(selectBoxOptions(res.data.items, 'name', 'id'));
      });
  }, []);

  return (
    <div>
      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[24px]">

        {/* Bedrooms */}
        <div className="relative z-[10]">
          <SelectBox
              isNewOnchange
              label="City"
              name="cityId"
              onChange={onChange}
              options={cities}
              placeholder="Select city"
              validation={validation && !cityId}
              value={cityId}
          />
        </div>

        {/* baths */}
        <div className="relative z-[9]">
          <SelectBox
              isNewOnchange
              label="Area"
              name="areaId"
              onChange={onChange}
              options={areas}
              placeholder="Select area"
              validation={validation && !areaId}
              value={areaId}
          />
        </div>

        <div>
          <InputField
              label="Latitude"
              name="latitude"
              onChange={onChange}
              placeholder="Enter latitude"
              validation={validation && !latitude}
              value={latitude}
          />
        </div>

        <div>
          <InputField
              label="Longitude"
              name="longitude"
              onChange={onChange}
              placeholder="Enter longitude"
              validation={validation && !longitude}
              value={longitude}
          />
        </div>
      </div>

    </div>
  );
};

export default PropertyLocation;
