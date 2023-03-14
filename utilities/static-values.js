import { allProperties, CommercialProperty, rentProperty, residentialProperties, saleProperty } from "../static-img-urls";

const apiInitValues = {
  items: [],
  total: 0,
};

const propertyTabs = [
  { label: 'Un-Published', value: 'unpublished' },
  { label: 'Published', value: 'published' },
  { label: 'Rejected', value: 'rejected' },
];

const defaultPropertyFormValues = {
  title: '',
  categoryId: null,
  areaId: null,
  cityId: null,
  rcAgentId: '',
  purpose: 'buy',
  sizeUnit: null,
  size: '',
  price: '',
  latitude: '',
  longitude: '',
  address: '',
  description: '',
  display: [],
  cover: [],
  image: [],
  published: false,
  propertyType: 'commercial',
  bed: null,
  bath: null,
};

const unitSizes = [
  { label: 'sqm', value: 'sqm' },
  { label: 'sqyd', value: 'sqyd' },
  { label: 'sqft', value: 'sqft' },
  { label: 'kanal', value: 'kanal' },
  { label: 'marla', value: 'marla' }
];

const tabs = [
  { label: 'Buy', value: 'buy' },
  { label: 'Rent', value: 'rent' },
  { label: 'Lease', value: 'lease' }
];

const baths = [
  { label: '1 Bath', value: 1 },
  { label: '2 Baths', value: 2 },
  { label: '3 Baths', value: 3 },
  { label: '4 Baths', value: 4 },
  { label: '5 Baths', value: 5 },
];

const bedrooms = [
  { label: '1 Bed', value: 1 },
  { label: '2 Beds', value: 2 },
  { label: '3 Beds', value: 3 },
  { label: '4 Beds', value: 4 },
  { label: '5 Beds', value: 5 },
];

const overViewCardsData = [
  {
    icon: allProperties,
    id: 1,
    quantity: 24,
    title: 'All Properties',
  },
  {
    icon: residentialProperties,
    id: 2,
    quantity: 12,
    title: 'Residentail',
  },
  {
    icon: CommercialProperty,
    id: 3,
    quantity: 8,
    title: 'Commercial',
  },
  {
    icon: rentProperty,
    id: 4,
    quantity: 17,
    title: 'For Rent',
  },
  {
    icon: saleProperty,
    id: 5,
    quantity: 9,
    title: 'For Sale',
  },
];
const removeAddPropButtonOn = [
  '/dashboard/properties/add-residential-property',
  '/dashboard/properties/edit-residential-property',
  '/dashboard/properties/add-commercial-property',
  '/dashboard/properties/edit-commercial-property',
];

export {
  apiInitValues,
  propertyTabs,
  defaultPropertyFormValues,
  unitSizes,
  tabs,
  baths,
  bedrooms,
  overViewCardsData,
  removeAddPropButtonOn,
};
