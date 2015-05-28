Package.describe({
   name: 'zcurtis:ftps',
   summary: "FTPS packaged for Meteor",
   git: 'https://github.com/zachariahtimothy/meteor-ftps.git',
   version: "0.0.2"
});

Npm.depends({
    "ftps": "0.2.8"
});

Package.on_use(function(api) {
     api.add_files('lib.js', 'server');
     api.export('FTPS');
});
