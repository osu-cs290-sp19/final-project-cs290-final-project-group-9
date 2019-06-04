(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['infoSidebar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<sidebar class=\"info-box\">\r\n  <div id=\"sidebar-dialog\">\r\n\r\n    <div class=\"sidebar-header\">\r\n      <h2>Cat Stats:</h2>\r\n    </div>\r\n\r\n    <div class=\"sidebar-body\">\r\n        <h3 id=\"sidebar-name\">Name: Luke Skypawker</h3>\r\n        <h3 id=\"sidebar-sex\">Sex: Male</h3>\r\n        <h3 id=\"sidebar-age\">Age: 2 years</h3>\r\n        <h3 id=\"sidebar-desc\">Description: Likes shiny things.</h3>\r\n    </div>\r\n\r\n    <input class=\"adopt-button\" type=\"button\" value=\"Adopt Me!\">\r\n\r\n  </div>\r\n</sidebar>\r\n";
},"useData":true});
})();