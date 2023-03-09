const buttons = [
  // ***************** Dahboard
  {
    activePages: ['dashboard'],
    imgUrl: undefined,
    subMenu: undefined,
    title: 'Dashboard',
    url: '/dashboard',
  },

  // ***************** Commercial
  {
    activePages: ['Commercial'],
    imgUrl: undefined,
    subMenu: [
      {
        activePages: ['/properties', '/addProperties', '/editProperty'],
        imgUrl: undefined,
        subMenu: [],
        title: 'Properties',
        url: '/dashboard/properties/commercial/listing',
      },
      {
        activePages: [''],
        imgUrl: undefined,
        subMenu: undefined,
        title: 'Leads',
        url: '/dashboard/leads/commercial-leads',
      },
    ],
    title: 'Commercial',
    url: '/dashboard/properties/commercial/listing',
  },

  // ***************** Residential
  {
    activePages: ['Residential'],
    imgUrl: undefined,
    subMenu: [
      {
        activePages: ['/dashboard/properties/residential', '/add-residential-properties', '/edit-residential-property'],
        imgUrl: undefined,
        subMenu: [],
        title: 'Properties',
        url: '/dashboard/properties/residential/listing',
      },
      {
        activePages: ['/residential-leads'],
        imgUrl: undefined,
        subMenu: undefined,
        title: 'Leads',
        url: '/dashboard/leads/residential-leads',
      },
    ],
    title: 'Residential',
    url: '/dashboard/properties/residential/listing',
  },

  // ***************** Agency
  {
    activePages: ['Agency'],
    imgUrl: undefined,
    subMenu: undefined,
    title: 'Agency',
    url: '/dashboard/agency',
  },
];

const allPages = [
  ...buttons,
  // { title: 'Commercial', url: '/addProperties' },
  {
    title: 'Agency',
    url: '/agency',
  },
];

export default buttons;

export {
  buttons,
  allPages,
};
