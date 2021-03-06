module.exports = {
    options: {
        atBegin: true,
        spawn: false,
        livereload: true,
        event: ["all"]
    },
	js: {
		files: ['<%= app_files.js %>'],
		tasks: ['jshint:debug', 'copy:d_app_js']
	},
	html: {
		files: ['<%= app_files.templates %>'],
		tasks: ['html2js:debug']
	},
	sass: {
		files: ['<%= app_files.sass %>'],
		tasks: ['sass:debug']
	},
	index: {
		files: ["src/index.html"],
		tasks: ['build_index:debug']
	},
	vendorjs: {
		files: ["<%= vendor_files.js %>"],
		tasks: ['copy:d_vendor_js']
	},
	others: {
		files: ["<%= app_files.images %>"],
		tasks: ['copy:d_app_images', 'copy:d_vendor_images', 'copy:d_app_fonts', 'copy:d_vendor_fonts', "copy:d_assets"]
	},
    css: {
        files: ["<%= app_files.css %>"],
        tasks: ['copy:d_app_css']
    },
	buildFiles: {
		files: ["Gruntfile.js", "build.config.js", "grunt-tasks/*.js"],
		tasks: ["debug"]
	}
}