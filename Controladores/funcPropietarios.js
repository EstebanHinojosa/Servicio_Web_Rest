// Codigo de las funciones de los propietarios
const propietarios = require("../Modelos/modPropietarios");
const propiedadesMD = require("../Modelos/modPropiedades");


const getAll = async function (req, res) {
    await res.json(propietarios.getAll());
};

const getPropietario = async function (req, res) {
    await res.json(propietarios.buscarPorID(req.params.input));
};

const postPropietario = async function (req, res) {
    const { id, nombre, rfc, propiedades } = req.body;
    if (nombre && rfc && propiedades) {
        let nuevo = { nombre: nombre, rfc: rfc, propiedades: propiedades };
        console.log(nuevo);
        propietarios.agregar(nuevo);
        res.json(propietarios.datos);
    } else {
        return;
    }
};

const deletePropietario = async function (req, res) {
    await res.json(propietarios.borrar(req.params.input));
};

const patchPropietario = async function (req, res) {
    await res.json(propietarios.actualizar(req.params.input, req.body));
};

const postPropiedad = async function (req, res) {
    await res.json(propietarios.postPropiedad(req.params.id, req.params.propiedad));
};

const putPropiedad = async function (req, res) {
    await res.json(propietarios.putPropiedad(req.params.id, req.params.propiedad));
};

const getPropiedades = async function (req, res) {
    let ps = propietarios.getPropiedades(req.params.id);
    let lista = [];
    ps.forEach((x) => {
        lista.push(propiedadesMD.buscarPorID(x));
    });
    await res.json(lista);
};

module.exports = {
    getAll,
    getPropietario,
    postPropietario,
    deletePropietario,
    patchPropietario,
    postPropiedad,
    putPropiedad,
    getPropiedades
};