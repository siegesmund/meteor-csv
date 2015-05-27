Package.describe({
  name: 'peter:csv',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Synchronous CSV parsing based on csv-parse',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('csv.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('peter:csv');
  api.addFiles('csv-tests.js');
});

Npm.depends({
  feedparser: "1.1.0",
  request: "2.55.0"
})
