
export const buttons = [

  // ***************** Dahboard
  { title: 'Dashboard', url: '/dashboard', imgUrl: null, subMenu: null, activePages: ['dashboard'] },

  // ***************** Commercial
  {
    title: 'Commercial', url: '/dashboard/properties/commercial/listing', imgUrl: null,
    subMenu: [
      { title: 'Properties', url: '/dashboard/properties/commercial/listing', imgUrl: null, subMenu: [], activePages: ['/properties', '/addProperties', '/editProperty'] },
      { title: 'Leads', url: '/dashboard/leads/commercial-leads', imgUrl: null, subMenu: null, activePages: [''], },
    ],
    activePages: ['Commercial']
  },

  // ***************** Residential
  {
    title: 'Residential', url: '/dashboard/properties/residential/listing', imgUrl: null,

    subMenu: [
      { title: 'Properties', url: '/dashboard/properties/residential/listing', imgUrl: null, subMenu: [], activePages: ['/dashboard/properties/residential', '/add-residential-properties', '/edit-residential-property'] },
      { title: 'Leads', url: '/dashboard/leads/residential-leads', imgUrl: null, subMenu: null, activePages: ['/residential-leads'], },
    ],

    activePages: ['Residential']
  },

  // ***************** Agency
  { title: 'Agency', url: '/dashboard/agency', imgUrl: null, subMenu: null, activePages: ['Agency'] }
];

export const allPages = [
  ...buttons,

  { title: 'Commercial', url: '/addProperties' },
  { title: 'Commercial', url: '/editProperty' },
  { title: 'Commercial', url: '/leads' },

  { title: 'Residential', url: '/add-residential-properties' },
  { title: 'Residential', url: '/edit-residential-property' },
  { title: 'Residential', url: '/residential-leads' },

  { title: 'Agency', url: '/agency' },


];

export default buttons