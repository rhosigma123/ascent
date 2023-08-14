const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials("views/partials")


app.get("/",(req,res)=>{
    res.render('index')
});

app.get("/about",(req,res)=>{
    res.render('about')
});

app.get("/porta-cabin-manufacturer",(req,res)=>{
    res.render('porta-cabin-manufacturer')
});

app.get("/prefabricated-structures",(req,res)=>{
    res.render('prefabricated-structures')
});

app.get("/portable-toll-booths-manufacturer",(req,res)=>{
    res.render('portable-toll-booths-manufacturer')
});

app.get("/portable-kitchen-manufacturer",(req,res)=>{
    res.render('portable-kitchen-manufacturer')
});

app.get("/portable-office-cabin-manufacturer",(req,res)=>{
    res.render('portable-office-cabin-manufacturer')
});

app.get("/portable-security-cabin-manufacturer",(req,res)=>{
    res.render('portable-security-cabin-manufacturer')
});

app.get("/portable-toilet-manufacturer",(req,res)=>{
    res.render('portable-toilet-manufacturer')
});

app.get("/bunk-house-manufacturer",(req,res)=>{
    res.render('bunk-house-manufacturer')
});

app.get("/portable-accommodation-cabin-manufacturer",(req,res)=>{
    res.render('portable-accommodation-cabin-manufacturer')
});

app.get("/container-homes-house-manufacturer",(req,res)=>{
    res.render('container-homes-house-manufacturer')
});

app.get("/portable-homes-buildings-manufacturer",(req,res)=>{
    res.render('portable-homes-buildings-manufacturer')
});

app.get("/used-shipping-container-for-sale",(req,res)=>{
    res.render('used-shipping-container-for-sale')
});

app.get("/old-cotainer",(req,res)=>{
    res.render('old-cotainer')
});

app.get("/portable-cabins-manufacturer",(req,res)=>{
    res.render('portable-cabins-manufacturer')
});

app.get("/container-office-manufacturer-mumbai",(req,res)=>{
    res.render('container-office-manufacturer-mumbai')
});

app.get("/holiday-homes-manufacturer",(req,res)=>{
    res.render('holiday-homes-manufacturer')
});

app.get("/blog",(req,res)=>{
    res.render('blog')
});

app.get("/portfolio",(req,res)=>{
    res.render('portfolio')
});

app.get("/layouts",(req,res)=>{
    res.render('layouts')
});

app.get("/contact",(req,res)=>{
    res.render('contact')
});
app.get("/contact",(req,res)=>{
    res.render('contact')
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });