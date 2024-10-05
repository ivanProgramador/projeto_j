const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conection = require("./database/database");

conection.authenticate().catch(err=>{
     console.log(err);
}
) 


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));


//models 
const Tipos = require("./models/Tipos");
const Peca  = require("./models/Peca");

//controllers
const tipoController = require("./controllers/tipoController");
const pecaController = require("./controllers/pecaController");




app.get("/",(req,res)=>{
     res.render("index");
})

app.use('/', tipoController);
app.use('/', pecaController);



app.listen(8080,()=>{
     console.log('App online');
});