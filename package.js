Package.describe({
  name: 'lawwantsin:ui-components',
  author: "Lawrence Whiteside",
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A collection of public facing UI components for rapid prototyping.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lawwantsin/meteor-ui-components.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating');
  api.use('mquandalle:jade@0.4.3');
  api.use('mquandalle:stylus@1.1.1');
  api.use('fortawesome:fontawesome@4.4.0');
  var clientFiles = [

    'normalize.styl',

    'icon/icon.jade',
    'icon/icon.js',
    'icon/icon.styl',

    'bottomNav/bottomNav.jade',
    'bottomNav/bottomNav.js',
    'bottomNav/bottomNav.styl',

    'contactNoForm/contactNoForm.jade',
    'contactNoForm/contactNoForm.js',
    'contactNoForm/contactNoForm.styl',

    'billBoard/billBoard.jade',
    'billBoard/billBoard.js',
    'billBoard/billBoard.styl',

    'teamBoard/teamBoard.jade',
    'teamBoard/teamBoard.js',
    'teamBoard/teamBoard.styl',

    'button/button.jade',
    'button/button.js',
    'button/button.styl',

    'screenShot/screenShot.jade',
    'screenShot/screenShot.js',
    'screenShot/screenShot.styl',

    'scrollMore/scrollMore.jade',
    'scrollMore/scrollMore.js',
    'scrollMore/scrollMore.styl',

    'securedSSL/securedSSL.jade',
    'securedSSL/securedSSL.js',
    'securedSSL/securedSSL.styl',

    'seoFooter/seoFooter.jade',
    'seoFooter/seoFooter.js',
    'seoFooter/seoFooter.styl',

    'socialMedia/socialMedia.jade',
    'socialMedia/socialMedia.js',
    'socialMedia/socialMedia.styl',

    'teamPortrait/teamPortrait.jade',
    'teamPortrait/teamPortrait.js',
    'teamPortrait/teamPortrait.styl',

    'videoEmbed/videoEmbed.jade',
    'videoEmbed/videoEmbed.js',
    'videoEmbed/videoEmbed.styl',

    'copyright/copyright.jade',
    'copyright/copyright.js',
    'copyright/copyright.styl',

    'skins/mercury.styl'

  ]
  api.addFiles(clientFiles, 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mquandalle:jade@0.4.3');
  api.use('mquandalle:stylus@1.1.1');
  api.use('fortawesome:fontawesome@4.4.0');
  api.use('lawwantsin:ui-components');
  api.addFiles('ui-components-tests.js');
});
