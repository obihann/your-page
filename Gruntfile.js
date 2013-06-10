"use strict";

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          hostname: 'localhost',
          port: 3000,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "public/index.html": "app/index.jade"
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    regarde: {
      scss: {
        files: ['app/scss/*.scss'],
        tasks: ['compass']
      },
      css: {
        files: ['public/css/*.css'],
        tasks: ['livereload']
      },
      jade: {
        files: ['app/*.jade'],
        tasks: ['jade']
      },
      views: {
        files: ['public/*.html'],
        tasks: ['livereload']
      }
    }
  });

  grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-regarde');
};