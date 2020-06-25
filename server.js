"use strict"
var express = require('express');
var mustache = require('mustache-express');
const cookieSession = require('cookie-session');
var app = express();
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');
app.use(cookieSession({ secret: 'wo-ai-zhongguo', }));

var img = app.use(express.static(__dirname + '/img'));
var css = app.use(express.static(__dirname + '/css'));

/* Routes */
app.listen(3000, () => console.log('listening on http://localhost:3000'));

app.get('/', getLang, (req, res) => {
  res.render(req.session.lang+'/index', {isHome: true, lang: fillLang(req.session.lang)});
});

app.get('/aboutme', getLang, (req, res) => {
  res.render(req.session.lang+'/aboutme', {isAboutme: true, lang: fillLang(req.session.lang)});
});

app.get('/projects', getLang, (req, res) => {
  res.render(req.session.lang+'/projects', {isProjects: true, lang: fillLang(req.session.lang)});
});

app.get('/cv', getLang, (req, res) => {
  res.render(req.session.lang+'/cv', {isCv: true, lang: fillLang(req.session.lang)});
});

app.get('/cvdownload', getLang, (req, res) => {
  res.render(req.session.lang+'/cvdownload');
});

function getLang(req, res, next) {
  if (req.session.lang == undefined || req.session.lang == null) { req.session.lang = "EN"; }
  next();
};

function fillLang(language) {
	var lang = [];
	if(language == "EN") {
		lang.uage = "en"; lang.website = "Personnal Website"; lang.home = "Home"; lang.about = "About Me"; lang.projects = "Projects"; lang.cv = "CV";
	}
	return lang;
}