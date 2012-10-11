Pages
=====

To create a new static page, add a new markdown file to /pages, ie: `/pages/newpage.md`. Push the update to your CouchDB instance and the default routes will make it available at `www.site.com/newpage`

Templates
=========

By default, pages will use the mustache template located in `/templates/default`. However, if you create a template with a name that matches a page, it will override the default template. For instance, if you have a page called `/pages/mypage.md` and a template called `/templates/mypage.md`, this template will be used for requests to `www.site.com/mypage`

Partials
========

Any partials added to `/templates/partials` will be automatically made available to page templates.

URL Rewrites
======

The Cushion `rewrites.json` contains a few default routes:

 * `/` goes to the `home` page
 * `/page-name` is routed to the appropriate page
 * `/css, /images, /js and /favicon.ico` go to the appropriate place in `_attachments`

Configs
=======

`cushion.json` includes a quick example of a configuration which can be accessed later in show functions, etc.. For example: the `title` property will be accessible in show functions as `this.cushion.title`, as seen in `shows/page.js` and is also provided to page templates and can be referenced like so: `{{cushion.property}}`