//Codigo de las rutas de los arrendatarios
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/modArrendatarios");

router.get("/",controler.getAll);
router.get("/:input",controler.getArrendatario);
router.post("/",controler.postArrendatario);
router.patch("/:input",controler.patchArrendatario);
router.delete("/:input",controler.deleteArrendatario);
router.put("/add/:id/:propiedad",controler.postPropiedad)
router.put("/remove/:id/:propiedad",controler.putPropiedad)
router.get("/:id/propiedades",controler.getPropiedades)

module.exports = router;