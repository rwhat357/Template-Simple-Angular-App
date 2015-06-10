module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3001,
					open: true,
					livereload: true
				}
			}
		},
		watch: {
			// reload the browser when changes are made
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'index.html'
				]
			},

			karma: {
				files: ['index.html'],
				tasks: ['karma:dev:run']
			}

		},
		//Take a look at Karma Server with Grunt Watch in grunt-karma's readme
		karma: {
			options: {
    			configFile: 'karma.conf.js'
    		},
			dev: {
				background: true,  //run in a child process so it doesn't block subsequent grunt tasks
				autoWatch: false, //watch task handles this.
				singleRun: false  //leave the karma server running.
			}
		},
		ngtemplates:  {
		    scotchApp: {
			    cwd:      './',
			    src:      ['pages/app/**/*.html','pages/Content/**/*.html'],
			    dest:     'templates.js',
			    options: {
			    	append: true,
			    	htmlmin: {
			    		  collapseBooleanAttributes:      true,
						  collapseWhitespace:             true,
						  removeAttributeQuotes:          true,
						  removeEmptyAttributes:          true,
						  removeRedundantAttributes:      true,
						  removeScriptTypeAttributes:     true,
						  removeStyleLinkTypeAttributes:  true
			    	}
			    }
		    }
		}
	
 	});

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('default',[
		'ngtemplates',
		'connect',
		'karma:dev:start',
		'watch'
	]);


};