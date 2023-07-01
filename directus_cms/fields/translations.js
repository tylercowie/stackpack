module.exports = {
  collection: 'site_content',
  field: 'translations',
  type: 'translations',
  options: {
    languages: ['en', 'es', 'fr', 'de'],
    default_language: 'en',
    localized: true
  },
  schema: {
    is_nullable: false,
    has_auto_increment: false,
    default_value: null,
    is_unique: false
  }
};