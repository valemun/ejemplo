const {Router} = require("express");
const router = Router();
//const express = require("express");
//const router = express.Router();

const contenido = require("./dataContenido.json");
//console.log(contenido);

router.get("/", (req, res) =>{
    res.json(contenido);
});

router.get("/:id", (req, res) =>{
   const {id} = req.params;
    

   console.log(id);
});

module.exports = router;