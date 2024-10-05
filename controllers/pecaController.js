const express = require("express");
const router = express.Router();
const Peca = require("../models/Peca");
const Tipo = require("../models/Tipos");

router.get("/pecas",(req,res)=>{    
    Peca.findAll().then(pecas=>{
        Tipo.findAll().then(Tipos=>{
            res.render("pecas/index",{pecas:pecas,tipos:tipos});

        })
       
    });
});

router.get("/pecas/edicao/:id",(req,res)=>{
    var id = req.params.id;
    Peca.findOne({where:{id:id}}).then(peca=>{
        res.render("pecas/edit",{peca:peca});
    });
});

router.post("/pecas/cadastrar",(req,res)=>{    

  var { codigo,nome,descricao,preco} = req.body;


    Peca.create({
           codigo:codigo,
           nome:nome,
           descricao:descricao,
           preco:preco
        }).then(()=>{

            res.redirect("/pecas");
       
    });
});

router.post("/pecas/apagar",(req,res)=>{

  var id = req.body.id;

    Peca.destroy({where:{id:id}}).then(()=>{
            res.redirect("/pecas");
    });
});

router.post("/pecas/editar",(req,res)=>{

   
    var {id,codigo,nome,descricao,preco}  = req.body;
  
      Peca.update({
        codigo:codigo,
        nome:nome,
        descricao:descricao,
        preco:preco
     },{where:{id:id}}).then(()=>{
              res.redirect("/pecas");
      });
});


module.exports = router;