import { render } from "ejs";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public")); //linking static files to the css
app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.get("/about", (req, res) => {
  res.render("POC.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
