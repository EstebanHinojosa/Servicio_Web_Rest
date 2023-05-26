// Codigo de las funciones de las propiedades
const propiedades = require("../Modelos/modPropiedades");

const getAll = async function (req, res) {
    await res.json(propiedades.getAll());
};

const getPropiedad = async function (req, res) {
    await res.json(propiedades.buscarPorID(req.params.id));
};

const postPropiedad = async function (req, res) {
    const { id, clave, descripcion, propietarios, arrendatario } = req.body;
    if (clave && descripcion && propietarios && arrendatario) {
        let nuevo = {id: id, clave: clave, descripcion: descripcion, propietarios: propietarios, arrendatario: arrendatario };
        console.log(nuevo);
        propiedades.agregar(nuevo);
        res.json(propiedades.datos);
    } else {
        return;
    }
};

const patchPropiedad = async function (req, res) {
    await res.json(propiedades.actualizar(req.params.id, req.body));
};

const deletePropiedad = async function (req, res) {
    await res.json(propiedades.borrar(req.params.id));
};

const arrendar = async function (req, res) {
    await res.json(propiedades.postArrendatario(req.params.id, req.params.arrendatario));
};

const liberar = async function (req, res) {
    await res.json(propiedades.putArrendatario(req.params.id));
};

const getArrendatario = async function (req, res) {
    await res.json(propiedades.getArrendatario(req.params.id));
};

const getPropietarios = async function (req, res) {
    await res.json(propiedades.getPropietarios(req.params.id));
};

module.exports = {
    getAll,
    getPropiedad,
    postPropiedad,
    patchPropiedad,
    deletePropiedad,
    arrendar,
    liberar,
    getArrendatario,
    getPropietarios
};