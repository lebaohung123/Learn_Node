const Course = require("../models/courses");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  //  GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((courses) => {
        return res.render("courses/show", {
          courses: mongooseToObject(courses),
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
    formData.image =
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-gai-xinh-viet-nam-373x560.jpg";
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
  // Course GET /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
  // Course PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(res.redirect("/me/stored/courses"))
      .catch(next);
  }
}
module.exports = new CourseController();
