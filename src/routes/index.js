const newsRouter = require("./news");
const courseRouter = require("./courses");
const meRouter = require("./me");
const siteRouter = require("./site");

function route(app) {
  app.use("/courses", courseRouter);
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}

module.exports = route;
