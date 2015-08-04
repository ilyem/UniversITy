/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Faculty = require('../api/faculty/faculty.model');
var Subject = require('../api/subject/subject.model');
var University = require('../api/university/university.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


University.find({}).remove(function() {
  University.create({
    name : 'Universitatea Politehnica Bucuresti',
  }, {
    name : 'Academia de Studii Economice',
  }, {
    name : 'Universitatea de Arhitectura si Urbanism "Ion Mincu" din Bucuresti',
  },  {
    name : 'Universitatea "Spiru Haret" din Bucuresti',
  },  {
    name : 'Universitatea "Hyperion" din Bucuresti',

  });
});

Faculty.find({}).remove(function() {
  Faculty.create({
    name : 'Electronica Telecomunicatii si Tehnologia Informatiei',
    department : ''
  }, {
    name : 'Cibernetică, Statistică şi Informatică Economică',
    department : ''
  }, {
    name : 'Facultatea de Urbanism',
    department : ''
  },  {
    name : 'Drept si Administratie Publica',
    department : ''
  },  {
    name : 'Facultatea de Arte',
    department : ''
  });
});

User.find({}).remove(function() {
  User.create({
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin'
      },{
        provider: 'local',
        role: 'professor',
        name: 'Professor',
        email: 'professor@professor.com',
        password: 'professor'
      },{
        provider: 'local',
        role: 'student',
        name: 'Student',
        email: 'student@student.com',
        password: 'student'
      },{
        provider: 'local',
        role: 'user',
        name: 'User',
        email: 'user@user.com',
        password: 'user'
      }, function() {
        console.log('finished populating users');
      }
  );
});
