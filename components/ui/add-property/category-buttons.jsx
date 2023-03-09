import { useState, useEffect } from 'react';

import { fetchCategories, fetchRRCategories } from '../../../services/categories';

const CategoryButton = ({ onChange, selectedCategory, propertyType, validation }) => {
  const [categories, setCategories] = useState({
    items: [],
    total: 0,
  });

  useEffect(() => {
    if (propertyType === 'commercial') {
      fetchCategories()
        .then((res) => {
          setCategories(res.data);
        });
    } else {
      fetchRRCategories()
        .then((res) => {
          setCategories(res.data);
        });
    }
  }, [propertyType]);

  return (
    <div className="flex flex-wrap gap-[16px]">
      {
        categories.items.map((item) => (
          <button
              className={`rounded-[5px] border-[1px] text-[12px] py-[6px] px-[15px] leading-[18px] ${selectedCategory === item.id ? 'border-border-secondary text-text-tertiary bg-[#EFEAF7]' : validation ? 'text-text-primary border-[#F04438] bg-white' : 'text-text-primary border-border-primary bg-white'}  hover:bg-[#EFEAF7] hover:text-text-tertiary hover:border-border-secondary`}
              key={item.id}
              onClick={() => onChange(item.id, 'categoryId')}
              type="button"
          >
            {item.name}
          </button>
        ))
      }
    </div>
  );
};

export default CategoryButton;
