module.exports = {
  collection: {
    name: 'languages',
    fields: [
      {
        name: 'code',
        type: 'string',
        meta: {
          interface: 'text-input',
          options: {
            placeholder: 'Enter language code (e.g., en, fr, de)',
          },
          display: 'code',
          readonly: false,
          hidden: false,
          sort: 'alphabetical',
          width: 'half',
        },
      },
      {
        name: 'name',
        type: 'string',
        meta: {
          interface: 'text-input',
          options: {
            placeholder: 'Enter language name (e.g., English, French, German)',
          },
          display: 'name',
          readonly: false,
          hidden: false,
          sort: 'alphabetical',
          width: 'half',
        },
      },
    ],
  },
};