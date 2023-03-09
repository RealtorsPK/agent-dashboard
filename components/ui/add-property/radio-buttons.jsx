import Radio from '../Input/radio';

const RadioButtons = ({ onChange, selectedType }) => (
  <div className="flex flex-wrap gap-x-[20px]">
    <Radio
        checked={selectedType === 'commercial'}
        label="Commercial"
        name="propertyType"
        onChange={onChange}
        value="commercial"
    />
    <Radio
        checked={selectedType === 'residential'}
        label="Residential"
        name="propertyType"
        onChange={onChange}
        value="residential"
    />
  </div>
);

export default RadioButtons;
