export const apiInitValues = {
  total: 0,
  items: []
};

export const propertyTabs = [
  { label: 'Un-Published', value: 'unpublished' },
  { label: 'Published', value: 'published' },
  { label: 'Rejected', value: 'rejected' },
]

export const defaultPropertyFormValues = {
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
}

export const unitSizes = [
  { label: 'sqm', value: 'sqm' },
  { label: 'sqyd', value: 'sqyd' },
  { label: 'sqft', value: 'sqft' },
  { label: 'kanal', value: 'kanal' },
  { label: 'marla', value: 'marla' }
];

export const tabs = [
  { label: 'Buy', value: 'buy' },
  { label: 'Rent', value: 'rent' },
  { label: 'Lease', value: 'lease' }
];


export const baths = [
  { label: '1 Bath', value: '1' },
  { label: '2 Baths', value: '2' },
  { label: '3 Baths', value: '3' },
  { label: '4 Baths', value: '4' },
  { label: '5 Baths', value: '5' },
]

export const bedrooms = [
  { label: '1 Bed', value: '1' },
  { label: '2 Beds', value: '2' },
  { label: '3 Beds', value: '3' },
  { label: '4 Beds', value: '4' },
  { label: '5 Beds', value: '5' },
]