Package.describe({
  name: 'peter:csv',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Synchronous CSV parsing based on csv-parse.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/siegesmund/meteor-csv.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('http');
  api.use('coffeescript');
  api.use('meteorhacks:npm@1.3.0');
  api.addFiles('csv.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('underscore')
  api.use('peter:csv');
  api.addFiles('csv-tests.js');
});

Npm.depends({
  "csv-parse": "0.1.1"
})
