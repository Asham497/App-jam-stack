const gulp = require("gulp");
const hb = require("gulp-hb");
const rename = require("gulp-rename");

function buildTemplates() {
  return gulp
    .src("src/templates/pages/*.hbs")
    .pipe(
      hb()
        .partials("src/templates/layouts/*.hbs")
        .partials("src/templates/partials/*.hbs")
        .data({
          title: "Internship Task 2"
        })
    )
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("dist"));
}

exports.default = buildTemplates;
