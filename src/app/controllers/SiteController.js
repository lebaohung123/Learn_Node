const Course = require("../models/courses");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // GET /home
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = mutipleMongooseToObject(courses);
        // courses: mutipleMongooseToObject(courses),
        res.render("home", { courses });
      })
      .catch(next);
  }
  //   GET /search

  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
