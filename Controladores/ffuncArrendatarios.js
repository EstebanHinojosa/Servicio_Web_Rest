// Codigo de las funciones de los arrendatarios
const modArrendatarios = require("../Modelos/modArrendatarios");
const modPropiedades = require("../Modelos/modPropiedades");

const getAll = async function (req, res) {
    await res.json(modArrendatarios.getAll());
};

const getArrendatario = async function (req, res) {
    await res.json(modArrendatarios.busquedaPorID(req.params.input));
};

const postArrendatario = async function (req, res) {
    const { id, nombre, rfc, propiedades } = req.body;
    if (nombre && rfc && propiedades) {
        let nuevo = { nombre: nombre, rfc: rfc, propiedades: propiedades };
        console.log(nuevo);
        modArrendatarios.agregar(nuevo);
        res.json(modArrendatarios.datos);
    } else {
        return;
    }
};

const deleteArrendatario = async function (req, res) {
    await res.json(modArrendatarios.borrar(req.params.input));
};

const patchArrendatario = async function (req, res) {
    await res.json(modArrendatarios.actualizar(req.params.input, req.body));
};

const postPropiedad = async function (req, res) {
    await res.json(modArrendatarios.postPropiedad(req.params.id, req.params.propiedad));
};

const putPropiedad = async function (req, res) {
    await res.json(modArrendatarios.putPropiedad(req.params.id, req.params.propiedad));
};

const getPropiedades = async function (req, res) {
    let ps = modArrendatarios.getPropiedades(req.params.id);
    let lista = [];
    ps.forEach((x) => {
        lista.push(modPropiedades.busquedaPorID(x));
    });
    await res.json(lista);
};

module.exports = {
    getAll,
    getArrendatario,
    postArrendatario,
    deleteArrendatario,
    patchArrendatario,
    postPropiedad,
    putPropiedad,
    getPropiedades
};