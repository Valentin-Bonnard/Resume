module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({

    concat: {
      css: { // Task
        src: ['public/css/animate.css'
          , 'public/css/responsive.css'
          , 'public/css/magnific-popup.css'
          , 'node_modules/formvalidation/dist/css/formValidation.css'
          , 'node_modules/toastr/build/toastr.css'], // Src matches are relative to this path
        dest: './dist/public/css/main.css' // destination -- will be created
      },
      js: { // Task
        src: ['public/js/jquery.js', 'public/bootstrap/js/bootstrap.min.js', 'public/jquery.stellar.min.js'
          , 'public/js/jquery.sticky.js', 'public/js/smoothscroll.js', 'public/js/wow.min.js'
          , 'public/js/jquery.countTo.js', 'public/js/jquery.inview.min.js', 'public/js/jquery.easypiechart.js'
          , 'public/js/jquery.shuffle.min.js', 'public/js/jquery.magnific-popup.min.js', 'public/js/jquery.fitvids.js'
          , 'node_modules/formvalidation/dist/js/formValidation.min.js', 'node_modules/formvalidation/dist/js/framework/bootstrap.min.js'
          , 'node_modules/toastr/toastr.js'
          , 'public/js/scripts.js'],
        dest: './dist/public/js/main.js'
      }
    },
    cssmin: {
      css: { // Task
        src: './dist/public/css/main.css',
        dest: './dist/public/css/main.min.css'
      }
    },
    uglify: {
      js: { // Task
        src: './dist/public/js/main.js',
        dest: './dist/public/js/main.min.js'
      }
    },
    imagemin: {
      png: { // Task
        options: {
          optimizationLevel: 7,
          progressive: 5
        },
        files: [
          {
            expand: true,
            cwd: 'public/images', //current working directory
            src: ['**/*.png'],
            dest: './dist/public/compressed/',  // destination -- will be created
            ext: '.png'
          }
        ]
      },
      jpg: { // Task
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'public/images',
            src: ['**/*.jpg'],
            dest: './dist/public/compressed/',
            ext: '.jpg'
          }
        ]
      },
      gif: { // Task
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'public/images',
            src: ['**/*.gif'],
            dest: './dist/public/compressed/',
            ext: '.gif'
          }
        ]
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./views",
            src: ["**"],
            dest: "./dist/views"
          },
          {
            expand: true,
            cwd: "./public",
            src: ["bootstrap/**", "fonts/**", "css/style.css", "css/font-awesome.min.css", "images/ico/favicon.ico"],
            dest: "./dist/public"
          },
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: false
        }
      }
    },
    watch: {
      ts: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["ts"]
      },
      views: {
        files: ["views/**/*.pug"],
        tasks: ["copy"]
      }
    },
    clean: {
      build: {
        src: ['dist/public/css/*.css', '!dist/public/css/main.min.css', '!dist/public/css/style.css', '!dist/public/css/font-awesome.min.css', 'dist/public/js/*.js', '!dist/public/js/main.min.js']
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", [
    "ts",
    "copy",
    "concat",
    "cssmin",
    "uglify",
    "imagemin",
    "clean"
  ]);

};

