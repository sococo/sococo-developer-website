var _ = require('underscore');

module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
         release: {
            src: ["www/"]
         }
      },

      copy: {
         release: {
            files: [
               { src: ['public/_bower/html5shiv/dist/html5shiv.min.js'], dest: 'www/_bower/html5shiv/dist/html5shiv.js', filter: 'isFile'}
            ]
         }
      },


      harp: {
         develop: {
            server: true,
            source: ''
         },
         release: {
            source: '',
            dest: 'www'
         }
      },

      /**
       * Release/Deploy tasks
       */
      bump: {
         options: {
            files: ['package.json', 'bower.json', 'harp.json'],
            updateConfigs: ['pkg'],
            commit: true,
            commitMessage: 'chore(deploy): release v%VERSION%',
            commitFiles: ['package.json', 'bower.json', 'CHANGELOG.md', 'harp.json'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
         }
      },
      changelog: {},

      'npm-contributors': {
         options: {
            commitMessage: 'chore(attribution): update contributors'
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-harp');

   // Release/Deploy
   grunt.loadNpmTasks('grunt-bump');
   grunt.loadNpmTasks('grunt-conventional-changelog');
   grunt.loadNpmTasks('grunt-npm');
   grunt.registerTask('release', 'Build, bump and tag a new release.', function(type) {
      type = type || 'patch';
      grunt.task.run([
         'npm-contributors',
         "bump:" + type + ":bump-only",
         'changelog',
         'bump-commit'
      ]);
   });
   // Default development task
   grunt.registerTask('default', ['clean','copy:develop','harp:develop']);

   // Build static site for release builds
   grunt.registerTask('teamcity', ['clean','harp:release','copy:release']);
};