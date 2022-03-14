import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

//static 설정
app.use("/public", express.static(__dirname + "/public"));

// home.pug로 렌더링
app.get("/", (req,res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

app.listen(3000, () => console.log(`Listening on https://localhost:3000`));
