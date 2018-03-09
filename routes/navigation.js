;
exports.home = function(req, res){
  res.render('home', {
    isHomePage: true
  });

};

exports.menu = function(req, res){
  res.render('menu', {
    isMenuPage: true
  });

};

exports.gallery = function(req, res){
  res.render('gallery', {
    isGalleryPage: true
  });

};

exports.about = function(req, res){
  res.render('about', {
    isAboutPage: true
  });

};

exports.contact = function(req, res){
  res.render('contact', {
    isLocationsPage: true
  });

};
