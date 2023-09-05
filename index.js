const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log(`App is listening to port${port}`);
});

app.use(express.static('public'));

app.get("/ContactMe",(req,res)=>{
    res.render("contactMe.ejs")
});

app.post("/ContactMe",(req,res)=>{
    res.redirect(8080,"/ContactMe");
});

app.get("/myprojects",(req,res)=>{
    res.render("myprojects.ejs");
});


app.get('/about', (req, res) => {
    res.sendFile(__dirname + 'myprojects.ejs');
});


