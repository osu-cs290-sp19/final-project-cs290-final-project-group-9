(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['kittenCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"kitten-card\">\r\n    <div class=\"kitten-card-img\">\r\n        <img src=\"http://placekitten.com/200/200\">\r\n    </div>\r\n    <div class=\"kitten-card-name\">\r\n        <p> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </p>\r\n    </div>\r\n    <!-- The structure below is subject to change -->\r\n    <div class=\"kitten-details\">\r\n        <p> "
    + alias4(((helper = (helper = helpers.sex || (depth0 != null ? depth0.sex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sex","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.chonk || (depth0 != null ? depth0.chonk : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chonk","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.cuddlyness || (depth0 != null ? depth0.cuddlyness : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cuddlyness","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.playfulness || (depth0 != null ? depth0.playfulness : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playfulness","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.otherPets || (depth0 != null ? depth0.otherPets : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"otherPets","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.coatlength || (depth0 != null ? depth0.coatlength : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coatlength","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p> "
    + alias4(((helper = (helper = helpers.quiz || (depth0 != null ? depth0.quiz : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quiz","hash":{},"data":data}) : helper)))
    + " </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();