Package.describe({
  name: 'lawwantsin:ui-components',
  author: "Lawrence Whiteside",
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A collection of public facing UI components for rapid prototyping.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating');
  api.use('mquandalle:jade');
  api.use('mquandalle:stylus');
  api.use('fortawesome:fontawesome');
  var clientFiles = [
    'billBoard/billBoard.jade',
    'billBoard/billBoard.js',
    'billBoard/billBoard.styl',

    'button/button.jade',
    'button/button.js',
    'button/button.styl',

    'screenShot/screenShot.jade',
    'screenShot/screenShot.js',
    'screenShot/screenShot.styl',

    'scrollMore/scrollMore.jade',
    'scrollMore/scrollMore.js',
    'scrollMore/scrollMore.styl',

    'teamPortrait/teamPortrait.jade',
    'teamPortrait/teamPortrait.js',
    'teamPortrait/teamPortrait.styl',

    'videoEmbed/videoEmbed.jade',
    'videoEmbed/videoEmbed.js',
    'videoEmbed/videoEmbed.styl'

  ]
  api.addFiles(clientFiles, 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fortawesome:fontawesome');
  api.use('mquandalle:jade');
  api.use('mquandalle:stylus');
  api.use('lawwantsin:ui-components');
  api.addFiles('ui-components-tests.js');
});
