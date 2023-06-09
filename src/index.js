const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const Handlebars = require("handlebars");
const route = require("./routes");

const app = express();
const port = 3000;

const db = require("./config/db");

// Connect db
db.connect();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

///HTTP Logger
// app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
