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
  api.use('mrgalaxy:stripe@2.1.0');
  api.use('fortawesome:fontawesome@4.4.0');
  var componentNames = [
    'billBoard'
    , 'bottomNav'
    , 'button'
    , 'callToAction'
    , 'copyright'
    , 'contactForm'
    , 'contactNoForm'
    , 'icon'
    , 'iconGroup'
    , 'joinForm'
    , 'loginForm'
    , 'loginJoinForm'
    , 'screenShot'
    , 'scrollMore'
    , 'securedSSL'
    , 'seoFooter'
    , 'socialMedia'
    , 'stripePopup'
    , 'teamBoard'
    , 'teamPortrait'
    , 'mailingListForm'
    , 'menuWDetails'
    , 'modalDialog'
    , 'videoEmbed'
  ];

  var clientFiles = [];

  var addtlFiles = [
    'normalize.styl'
    , 'skins/mercury.styl'
  ];

  clientFiles = clientFiles.concat(addtlFiles);
  var extensions = [
    'jade',
    'styl',
    'js'
  ];
  for (name in componentNames) {
    var componentFiles = [];
    for (ext in extensions) {
      componentFiles.push(componentNames[name] + '/' + componentNames[name] + '.' + extensions[ext]);
    }
    clientFiles = clientFiles.concat(componentFiles);
  }

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
