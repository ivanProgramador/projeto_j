const Tipo = require("../models/Tipos");
const express  = require("express");
const router = express.Router();

router.get("/tipos",(req,res)=>{
    Tipo.findAll().then(tipos=>{
         res.render('tipos/index',{tipos:tipos})
    })
});

router.get("/tipos/edicao/:id",(req,res)=>{
    var id = req.params.id;

    Tipo.findOne({id:id}).then(tipo=>{
         res.render("tipos/edit",{tipo:tipo})
    });
});

router.post("/tipos/editar",(req,res)=>{
    var {id,codigo,descricao,nome} = req.body;
    Tipo.update({codigo:codigo,nome:nome,descricao:descricao},{where:{id:id}}).then(
        res.redirect("/tipos")
     )

});

router.post("/tipos/cadastrar",(req,res)=>{
    var {codigo,nome,descricao} = req.body;
    Tipo.create({codigo:codigo,nome:nome,descricao:descricao}).then(()=>{
        res.redirect("/tipos");
    });
});

router.post("/tipo/apagar",(req,res)=>{
   
    var id = req.body.id; 

    Tipo.destroy({where:{id:id}}).then(()=>{
        res.redirect("/tipos")
    })
     
})

module.exports = router;