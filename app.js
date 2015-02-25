var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'topsecret',
                  saveUninitialized: true,
                  resave: true }));

// public files
app.use(express.static(__dirname + '/public'));



var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// var bcrypt = require('bcrypt-nodejs');
// connection
var mongoose = require('mongoose');
var user = "admin";
var password = "admin";
mongoose.connect('mongodb://'+user+':'+password+'@ds039331.mongolab.com:39331/mareas');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('connection OK!');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// schema
var mareasSchema = mongoose.Schema({
    dia: String,
    pleamar1: String,
    pleamar2: String,
    bajamar1: String,
    bajamar2: String
}, { collection: 'mareas' });

var Mareas = mongoose.model('Mareas', mareasSchema);

app.get('/mareas', function(req, res) {
	    // find all
	    Mareas.find({}, function (err, mareas) {
	      if (err) {
	        console.error(err);
	        res.send('Error');
	      } else {
	        console.log('Find all Mareas:');
	        console.log(mareas);
	        res.json(mareas);
	      }
	    });
});

app.post('/buscarmareas', function(req, res) {
      console.log(req.body.dialocal);
	    Mareas.find({ dia: req.body.dialocal }, function (err, bmarea) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('Find buscar marea:');
        console.log(bmarea);
        res.json(bmarea);
      }
    });
});

app.post('/insertarmareas', function(req, res){ 
  var marea = new Mareas({ dia: req.body.inputDia, pleamar1: req.body.inputPleamar1, pleamar2: req.body.inputPleamar2, bajamar1: req.body.inputBajamar1, bajamar2: req.body.inputBajamar2}); 
  console.log(marea); 

  marea.save(function (err, mareaAdd, numberAffected) { 
    if (err) { 
      console.error(err); 
      res.send('Error'); 
    } else { 
      console.log('marea created:'); 
      console.log(mareaAdd);
      res.json(mareaAdd); 
    } 
  }); 

});

app.post('/actumareas', function(req, res){
    // find all
    Mareas.update({ dia: req.body.AinputDia }, { $set: { pleamar1: req.body.AinputPleamar1, pleamar2: req.body.AinputPleamar2, bajamar1: req.body.AinputBajamar1, bajamar2: req.body.AinputBajamar2 }}, {}, function (err, numberAffected, raw) {
      if (err) {
        console.error(err);
        res.send('Error');
      } else {
        console.log('numberAffected:');
        console.log(numberAffected);
        res.json(raw);
      }
    });

});

app.get('/', function (req, res) { 
  /*es.sendFile(__dirname + '/public/home.html');*/
  res.redirect('/home.html');
});

// schema
var userSchema = mongoose.Schema({
    name: String,
    password: String
}, { collection: 'users' });

var Users = mongoose.model('Users', userSchema);


// Recoger usuario local
passport.use(new LocalStrategy(
  function(username, password, done) {

    // Coge el documento de MongoDB
    console.log(username);
    console.log(password);


    Users.find({ name: username }, function (err, users) {
      if (err) return console.error(err);
      console.log('Find user:');
      console.log(users);

      // Desglose del usuario encontrado
      console.log(users[0].password);
      console.log(users[0].name);
 

      // compara usuario local(username y password) con el de la base de datos(users.name y .password) 
      //if ((username == users.name) && (bcrypt.compareSync(password, hash))) {
      if ((username == users[0].name) && (password==users[0].password)) {
        // login OK
        return done(null, username);
      } else {
        // login KO
        console.log("resultados:");
        console.log("usuario local: "+username);
        console.log("usuario db: "+users[0].name);
        console.log("contraseña local: "+password);
        console.log("contraseña bd: "+users[0].password);
        return done(null, false);
      }

    });
  }
));




app.post('/login',
  passport.authenticate('local', { successRedirect: '/loginSuccess',
                                   failureRedirect: '/loginFailure',
                                   failureFlash: false })
);

app.get('/loginFailure', function(req,res) {
  res.send('Login KO. username/password incorrect');
});


app.get('/loginSuccess', ensureAuthenticated, function(req,res) {
  res.redirect('/admin.html');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/otherpage', ensureAuthenticated, function(req, res){
  res.send('other page');
});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});