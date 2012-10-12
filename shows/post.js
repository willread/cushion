function(req, doc){
	var Mustache = require("lib/mustache");
	var sundown = require("lib/sundown");
	var post, next, previous;
	var posts = this.blog["_meta"];
	for(var p = 0; p < posts.length; p++){
		if(posts[p].content == doc.query.post){
			post = posts[p];
			next = posts[p + 1];
			previous = posts[p - 1];
			break;
		}	
	}
	if(!post){
		post = posts[posts.length - 1];
		previous = posts[posts.length - 2];
	}
  	return Mustache.to_html(this.templates["post"] || this.templates.default, {
  		cushion: this.cushion,
  		content: post ? sundown(this.blog[post.content]) : "",
  		title: post.title,
  		date: post.date,
  		next: next,
  		previous: previous
  	}, this.templates.partials);
}