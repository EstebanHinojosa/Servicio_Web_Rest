//Codigo de las rutas de las propiedades
const express = require("express");
const router = express.Router();
const controler = require("../Controladores/modPropiedades");

router.get("/",controler.getAll);
router.get("/:id",controler.getPropiedad);
router.post("/",controler.postPropiedad);
router.patch("/:id",controler.patchPropiedad);
router.delete("/:id",controler.deletePropiedad);
router.put("/arrendar/:id/:arrendatario",controler.arrendar);
router.put("/liberar/:id",controler.liberar);
router.get("/:id/propietarios",controler.getPropietarios);
router.get("/:id/arrendatario",controler.getArrendatario);
module.exports = router;