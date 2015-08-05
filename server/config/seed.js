/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Event = require('../api/event/event.model');

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

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

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    year: 4,  
    group: '442A',
    series: 'A',
    faculty: 'ETTI'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    year: 2,  
    group: '421B',
    series: 'B',
    faculty: 'ETTI'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Event.find({}).remove(function() {
  Event.create({
  professor: 'Lucian Stanciu',  
  start: new Date(y, m, d, 13, 0),
  end: new Date(y, m, d, 15, 0),
  title: 'IEM',
  eventType: 'curs',
  year: 4,  
  group: '442A',
  series: 'A',
  faculty: 'ETTI'
},
{
  professor: 'Burileanu',  
  start: new Date(y, m, d - 5, 13, 0),
  end: new Date(y, m, d - 5, 15, 0),
  title: 'AMP',
  eventType: 'curs',
  year: 2,  
  group: '421B',
  series: 'B',
  faculty: 'ETTI'
},
{
  professor: 'Petrescu',  
  start: new Date(y, m, d - 2, 13, 0),
  end: new Date(y, m, d - 2, 15, 0),
  title: 'Microunde',
  eventType: 'curs',
  year: 3,  
  group: '431D',
  series: 'D',
  faculty: 'ETTI'
});

});