const Course = require("../models/courses");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class CourseController {
  //  GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        return res.render("courses/show", {
          courses: courses.toJSON(),
          // courses: courses.toJSON(),
        });
      })
      .catch(next);
  }
  // Course GET
  create(req, res, next) {
    res.render("courses/create");
  }
  // Course POST
  store(req, res, next) {
    const formData = req.body;
    formData.image = "https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-xinh-viet-nam-373x560.jpg"
    const course = new Course(formData)
    course.save()
      .then(() => res.redirect('/'))
      .catch(err => {});
  }
}
module.exports = new CourseController();
