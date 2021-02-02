const proj_folder = "dist",
  source_folder = "src";

const path = {
  build: {
    html: proj_folder + "/",
    css: proj_folder + "/css/",
    img: proj_folder + "/img/",
    fonts: proj_folder + "/fonts/",
  },

  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/sass/style.sass",
    img: source_folder + "/img/**/*",
    fonts: source_folder + "/fonts/*.ttf",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/sass/**/*.sass",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*",
  },
  clean: "./" + proj_folder + "/",
};

const {
  src,
  dest
} = require("gulp"),
  gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  group_media = require("gulp-group-css-media-queries"),
  clean_css = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webphtml = require("gulp-webp-html"),
  webpack = require('webpack-stream');

function browSync() {
  browserSync.init({
    server: {
      baseDir: "./" + proj_folder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function clean() {
  return del(path.clean);
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(sass({
      outputStyle: "expanded",
    }))
    .pipe(group_media())
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true,
    }))
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(rename({
      extname: ".min.css",
    }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

function webpackForJS() {
  return gulp.src('src/js/script.js')
    .pipe(webpack({
      config: require('./webpack.config.js')
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(
      webp({
        qualiti: 70,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function watchFile() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], webpackForJS);
  gulp.watch([path.watch.img], images);
}

const build = gulp.series(clean, gulp.parallel(webpackForJS, css, html, images, fonts));
const watch = gulp.parallel(build, watchFile, browSync);

exports.html = html;
exports.css = css;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = watch;