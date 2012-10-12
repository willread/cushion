I've added a basic example of blogging type functionality.

As with pages, blog posts are stored as flat markdown files (although due to the nature of CouchDB these DO ultimately reside in the database). The new trick here is the json file in the `blog` folder called `_meta.json`. This file stores meta data for each blog post and also implies order (based on the order in the array) so that we can navigate through posts.

Here's an example `/blog/_meta.json`:

    [{
    	"title": "This is a post title",
    	"date": "January 1, 2012",
    	"content": "first-post"
    },{
    	"title": "This is another post title",
    	"date": "January 2, 2012",
    	"content": "second-post"
    }]
    
The `/blog/` folder would look like this:

    _meta.json
    first-post.md
    second-post.md