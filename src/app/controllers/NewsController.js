const users = [1, 2, 3, 4, 5];
class NewsController {
  // GET /news
  index(req, res) {
    res.render("news");
  }

  //   GET / slug
  show(req, res) {
    res.send("Hello");
  }
}
module.exports = new NewsController();
