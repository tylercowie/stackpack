module.exports = {
  collection: {
    name: 'site_content',
    fields: [
      {
        name: 'title',
        type: 'string',
        meta: {
          interface: 'text-input',
          options: {},
          display: 'text-input',
          readonly: false,
          hidden: false,
          sort: 'alphabetical',
          width: 'half',
          interfaceOptions: {},
        },
      },
      {
        name: 'body',
        type: 'string',
        meta: {
          interface: 'textarea',
          options: {},
          display: 'textarea',
          readonly: false,
          hidden: false,
          sort: 'alphabetical',
          width: 'full',
          interfaceOptions: {},
        },
      },
      {
        name: 'translations',
        type: 'json',
        meta: {
          interface: 'translations',
          options: {},
          display: 'translations',
          readonly: false,
          hidden: false,
          sort: 'alphabetical',
          width: 'full',
          interfaceOptions: {},
        },
      },
    ],
  },
};