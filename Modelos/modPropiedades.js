//Codigo del modelo de datos locales y funciones de las propiedades
const arMD = require("./modArrendatarios");
const prMD = require("./modPropietarios")

const datos = [
    { 
        id: 1,
        clave: "C45AXL" ,
        descripcion: "Casa grande",    
        arrendatario: [1,2],
        propietarios: 1
    },
    { 
        id: 2,
        clave: "C45AL" ,
        descripcion: "Casa mediana", 
        arrendatario: [1,3],
        propietarios: 2
    },
    { 
        id: 3,
        clave: "C45AS" ,
        descripcion: "Casa chica",   
        arrendatario: [3],
        propietarios: 3
    }
]

const getAll= function(){
    return datos
}

const busquedaPorID= function(id){
    return datos.find(x=>x.id==id)
}

const agregar=function(p){
    datos.push({id: datos.length+1, clave: p.clave, descripcion: p.descripcion,propietarios: p.propietarios,arrendatario: p.arrendatario})
    return datos
}

const borrar=function(id){
    let index = datos.findIndex(x=> x.id==id)
    if(index>-1)
        datos.splice(index,1)
    return datos
}

const actualizar=function(id,cambios){
    let p= busquedaPorID(id)
    let nuevo= {...p,...cambios}
    console.log(nuevo)
    borrar(id)
    datos.splice(id-1,0,nuevo)
    return datos
}

const postArrendatario=function(id,arrendatario){
    let p= busquedaPorID(id)
    borrar(id)
    let nuevo= {...p,arrendatario:arrendatario}
    console.log(nuevo)
    datos.splice(id-1,0,nuevo)
    arMD.postPropiedad(arrendatario,id)
    return buscarPorID(id)
}

const putArrendatario=function(id){
    let p=busquedaPorID(id)
    let are=p.arrendatario;
    if(are!=null||are!=" "){
        borrar(id)
        let nuevo= {...p,arrendatario:" "} 
        datos.splice(id-1,0,nuevo)
        arMD.putPropiedad(are,id)
    }
    return busquedaPorID(id)
}

const getArrendatario=function(id){
    let p=busquedaPorID(id).arrendatario
    return arMD.busquedaPorID(p)
}

const getPropietarios=function(id){
    let lista=[]
    let p=busquedaPorID(id).propietarios

    p.forEach(x => {
        lista.push(prMD.busquedaPorID(x))
    });
    return lista
}

module.exports={
    getAll,
    busquedaPorID,
    agregar,
    borrar,
    actualizar,
    postArrendatario,
    putArrendatario,
    getArrendatario,
    getPropietarios
}