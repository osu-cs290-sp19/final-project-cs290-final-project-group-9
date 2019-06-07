(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['kittenCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article id="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + " class=\"kitten-card\">\r\n    <div class=\"kitten-card-img\">\r\n        <img src="
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + ">\r\n    </div>\r\n    <div class=\"kitten-card-name\">\r\n        <p class=\"kitten-card-name-p\"> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </p>\r\n    </div>\r\n    <!-- The structure below is subject to change -->\r\n    <div class=\"kitten-details hidden\">\r\n        <p class=\"kitten-sex\"> "
    + alias4(((helper = (helper = helpers.sex || (depth0 != null ? depth0.sex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sex","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-age\"> "
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-desc\"> "
    + alias4(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-chonk\"> "
    + alias4(((helper = (helper = helpers.chonk || (depth0 != null ? depth0.chonk : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chonk","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-cuddle\"> "
    + alias4(((helper = (helper = helpers.cuddle || (depth0 != null ? depth0.cuddle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cuddle","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-play\"> "
    + alias4(((helper = (helper = helpers.play || (depth0 != null ? depth0.play : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"play","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-cuddle\"> "
    + alias4(((helper = (helper = helpers.pets || (depth0 != null ? depth0.pets : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pets","hash":{},"data":data}) : helper)))
    + " </p>\r\n        <p class=\"kitten-coat\"> "
    + alias4(((helper = (helper = helpers.coat || (depth0 != null ? depth0.coat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coat","hash":{},"data":data}) : helper)))
    + " </p>\r\n    </div>\r\n</article>\r\n";
},"useData":true});
})();