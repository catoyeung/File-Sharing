require.config({
	paths: {
		//text: 'templates'
		handlebars: '/static/scripts/'
	},
	shim: {
		"handlebars.runtime": {
			exports: "Handlebars"
		}
	}
});

require(["app",
				 "text",
				 "text!templates/lobby.html",
				 "handlebars",
				 "helper/util"], function(
	app,
	text,
	lobby,
	handlebars,
	util) {
		var application = new App();
		application.run();
		console.log(handlebars);
		var source = lobby;
		/*var template = Handlebars.compile(source);
		var context = {title: "My New Post", body: "This is my first post!"};
		var html    = template(context);
		document.write(html);*/

});
