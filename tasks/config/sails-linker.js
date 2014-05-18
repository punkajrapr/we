/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script data-main="/main" src="/js/libs/require.js" data-dump="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.ejs': ['.tmp/public/js/app.js']
      }
    },

    devJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script data-main="/main" src="/js/libs/require.js" data-dump="%s" ></script>',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.ejs': ['.tmp/public/js/app.js']
      }
    },

    prodJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script data-main="/main.prod" src="/js/libs/require.js" data-dump="%s" ></script>'
        ,
        appRoot: '.tmp/public'
      },
      files: {
        'views/**/*.ejs': ['.tmp/public/main.prod.js']
      }
    },

    prodJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script data-main="/main.prod" src="/js/libs/require.js" data-dump="%s" ></script>'
        ,
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        'views/**/*.ejs': ['.tmp/public/main.prod.js']
      }
    },

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/production.css'],
				'views/**/*.html': ['.tmp/public/min/production.css'],
				'views/**/*.ejs': ['.tmp/public/min/production.css']
			}
		},

		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/production.css'],
				'views/**/*.html': ['.tmp/public/min/production.css'],
				'views/**/*.ejs': ['.tmp/public/min/production.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/tpls.hbs.js'],
				'views/**/*.html': ['.tmp/public/tpls.hbs.js'],
				'views/**/*.ejs': ['.tmp/public/tpls.hbs.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
