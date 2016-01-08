Package.describe({
	name: 'milligram:milligram-sass',
	version: '0.0.1',
	summary: 'A minimalist CSS framework on Sass version.',
	git: 'https://github.com/milligram/milligram-sass.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.sass'
	], 'client');
});
