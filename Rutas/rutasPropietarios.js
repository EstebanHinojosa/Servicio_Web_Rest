//Codigo de las rutas de los propietarios
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/modPropietarios");

router.get("/",controler.getAll);
router.get("/:input",controler.getPropietario);
router.post("/",controler.postPropietario);
router.patch("/:input",controler.patchPropietario);
router.delete("/:input",controler.deletePropietario);
router.put("/add/:id/:propiedad",controler.postPropiedad)
router.put("/remove/:id/:propiedad",controler.putPropiedad)
router.get("/:id/propiedades",controler.getPropiedades)
module.exports = router;