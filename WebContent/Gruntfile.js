module.exports = function (grunt) {


	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ['.tmp'],

		copy: {
			main: {
				expand: true,
				cwd: 'dev/',
				src: ['**',
					'!js/**',
					'!lib/**',
					'!global/**',
					'!app/**',
					'!**/*.css',
					'!**/*.png',
					'!*.js',
					//'!*.html',
					'!*.css',
					'!*.json',
					'!*.gif',
					'*.png',


					],
					dest: 'dist/'
			}
			
			

		},


		jshint: {
			files: ['gruntfile.js','dev/**/*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},



		useminPrepare: {
			html: 'dev/index.html'
		},

		usemin: {
			html: ['dist/index.html']
		},

		uglify: {
			options: {
				report: 'min',
				mangle: false
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
		,

		protractor: {

			options: {
				keepAlive: true,
				configFile: "prot.js",
				suite:"fluxoprincipal",

			},
			singlerun: {}

		},

		ngdocs: {
			all:["dev/global/st-api/**/*.js"]
		},
	


		ngtemplates:  {

			app:        {

				cwd:      'dev/',
				src:       'app/**/*.html',
				dest:     'dist/js/app-templates.js',
				options:    {
					module:"stapi",
					htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
				}

			},

		}
		
	});


	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-rev'); //Adiciona números aleatórios aos nomes dos arquivos minificados (Util para lógicas de cache)
	grunt.loadNpmTasks('grunt-usemin');

	grunt.loadNpmTasks('grunt-ngdocs');

	// Tell Grunt what to do when we type "grunt" into the terminal



	grunt.registerTask('war', [
		'war'
		]);
	grunt.registerTask('default', [
		//'karma',
		'copy',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'usemin',
		'ngtemplates'
		
		]);

	grunt.registerTask('api', [
		//'karma',
		'copy',
		'useminPrepare',
		'concat',
		'ngtemplates'
		]);

	grunt.registerTask('end2end', ['protractor']);
};