const Course = require("../models/courses");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        return res.render("me/stored-courses", {
          courses: mutipleMongooseToObject(courses),
        });
        // return res.send(courses);
      })
      .catch(next);
  }
}
module.exports = new MeController();
