import { useState, useEffect } from 'react';

import { fetchFeatures } from '../../../services/amenities';

const Aminities = ({ selectedFeatures, setSelectedFeatures, categoryId }) => {
  const [amenities, setAmenities] = useState({
    items: [],
    total: 0,
  });

  // OnChange Features
  const onChange = (id) => {
    const newAmenitiesData = [...selectedFeatures];

    if (!newAmenitiesData.includes(id)) {
      newAmenitiesData.push(id);
    } else {
      const index = newAmenitiesData.indexOf(id);

      newAmenitiesData.splice(index, 1);
    }

    setSelectedFeatures(newAmenitiesData);
  };

  useEffect(() => {
    if (categoryId) {
      fetchFeatures(`?categoryId=${categoryId}`)
        .then((res) => {
          setAmenities(res.data);
        });
    }
  }, [categoryId]);

  return (
    <div className="flex flex-wrap gap-[16px]">
      {
        amenities.items.length ?
          amenities.items.map((item) => (
            <button
                className={`rounded-[5px] border-[1px] text-[12px] py-[6px] px-[15px] leading-[18px] ${selectedFeatures.includes(item.id) ? 'border-border-secondary text-text-tertiary bg-[#EFEAF7]' : 'text-text-primary border-border-primary bg-white'}  hover:bg-[#EFEAF7] hover:text-text-tertiary hover:border-border-secondary`}
                key={item.id}
                onClick={() => onChange(item.id)}
                type="button"
            >
              {item.name}
            </button>
          ))
          :
          <p className="text-[12px]">{'No features found, please select property category from the top.'}</p>
      }
    </div>
  );
};

export default Aminities;
