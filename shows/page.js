function(req, doc){
	var Mustache = require("lib/mustache");
	var sundown = require("lib/sundown");
	var name = doc.query.page;
	var page = this.pages[name];
  	return Mustache.to_html(this.templates[name] || this.templates.default, {
  		cushion: this.cushion,
  		content: page ? sundown(page) : "",
  	}, this.templates.partials);
}