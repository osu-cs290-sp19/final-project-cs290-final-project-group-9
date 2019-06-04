(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['searchSidebar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<sidebar class=\"filter-search\">\r\n  <div id=\"filter-cats-dialogue\">\r\n\r\n    <div class=\"filter-header\">\r\n      <h2>Filter Search:</h2>\r\n    </div>\r\n\r\n    <div class=\"filter-body\">\r\n      <div id=\"filter-search-sex\">\r\n        <h3>Sex:</h3>\r\n        <input name=\"sex\" class=\"cat-sex-search\" type=\"radio\">male</input>\r\n        <input name=\"sex\" class=\"cat-sex-search\" type=\"radio\">female</input>\r\n        <input name=\"sex\" class=\"cat-sex-search\" type=\"radio\">No preference</input>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"filter-search-age\">\r\n      <h3>Age:</h3>\r\n      <input name=\"age\" class=\"cat-age-search\" type=\"radio\">0-1 years</input>\r\n      <input name=\"age\" class=\"cat-age-search\" type=\"radio\">2-5 years</input>\r\n      <input name=\"age\" class=\"cat-age-search\" type=\"radio\">6-9 years</input>\r\n      <input name=\"age\" class=\"cat-age-search\" type=\"radio\">10+ years</input>\r\n      <input name=\"age\" class=\"cat-age-search\" type=\"radio\">No preference</input>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"filter-search-chonk\">\r\n    <h3>Chonk or No Chonk:</h3>\r\n    <input name=\"chonk\" class=\"cat-chonk-search\" type=\"radio\" value=\"true\">CHONK!</input>\r\n    <input name=\"chonk\" class=\"cat-chonk-search\" type=\"radio\" value=\"false\">No chonk...</input>\r\n    <input name=\"chonk\" class=\"cat-chonk-search\" type=\"radio\" value=\"null\">No preference</input>\r\n  </div>\r\n\r\n  <div id=\"filter-search-cuddly\">\r\n      <h3>Cuddlyness Rating:</h3>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">1/5</input>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">2/5</input>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">3/5</input>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">4/5</input>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">5/5</input>\r\n      <input name=\"cuddly\" class=\"cat-cuddly-search\" type=\"radio\">No preference</input>\r\n    </div>\r\n\r\n    <div id=\"filter-search-playful\">\r\n        <h3>Playfulness Rating:</h3>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">1/5</input>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">2/5</input>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">3/5</input>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">4/5</input>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">5/5</input>\r\n        <input name=\"playful\" class=\"cat-playful-search\" type=\"radio\">No preference</input>\r\n      </div>\r\n\r\n      <div id=\"filter-search-otherPets\">\r\n          <h3>Good With Other Pets:</h3>\r\n          <input name=\"otherPets\" class=\"cat-otherPets-search\" type=\"radio\">Yes</input>\r\n          <input name=\"otherPets\" class=\"cat-otherPets-search\" type=\"radio\">No</input>\r\n          <input name=\"otherPets\" class=\"cat-otherPets-search\" type=\"radio\">No preference</input>\r\n        </div>\r\n\r\n        <div id=\"filter-search-coatLength\">\r\n            <h3>Coat Length:</h3>\r\n            <input name=\"coatLength\" class=\"cat-coatLength-search\" type=\"radio\">Short</input>\r\n            <input name=\"coatLength\" class=\"cat-coatLength-search\" type=\"radio\">Medium</input>\r\n            <input name=\"coatLength\" class=\"cat-coatLength-search\" type=\"radio\">Long</input>\r\n            <input name=\"coatLength\" class=\"cat-coatLength-search\" type=\"radio\">No preference</input>\r\n          </div>\r\n\r\n  </div>\r\n</sidebar>\r\n";
},"useData":true});
})();