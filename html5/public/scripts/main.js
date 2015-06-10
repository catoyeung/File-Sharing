require.config({
	paths: {
		//text: 'templates'
	},
	shim: {
    "handlebars": {
      exports: "Handlebars"
    },
		"jade": {
			exports: "Jade"
		},
		"app": {
			exports: "App"
		}
  }
});

require(["app", "text", "text!templates/lobby.html", "handlebars", "jade", "helper/util"], function(
	App,
	text,
	lobby,
	Handlebars,
	Jade,
	util) {
		require([], function () {
			var application = new App();
			application.run();
			var source = lobby;
			var template = Handlebars.compile(source);
			var context = {title: "My New Post", body: "This is my first post!"};
			var html = template(context);
			document.write(html);
		});

});
