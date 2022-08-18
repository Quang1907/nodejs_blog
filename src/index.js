const express = require('express');
const morgan = require('morgan');
const path = require("path");
const handlebars = require('express-handlebars');
const app = express();
const port = 2700;
app.use(express.static(path.join(__dirname, "public")))

// http logger
app.use(morgan("combined"));
// template engine
app.engine("hbs", handlebars.engine({ defaultLayout: 'main', extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

app.get('/', (reg, res) => {
    res.render("home");
})
// app.get('/tin-tuc', (reg, res) => res.send("<h1 style='color:red'>Quangcntt</h1>"))
app.get('/news', (reg, res) => res.render("news"))

app.listen(port, () => console.log(`localhost::${port}`))