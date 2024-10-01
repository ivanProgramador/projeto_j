const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));



app.listen(8080,()=>{
     console.log('App online');
});