//Codigo del modelo de datos locales y funciones de los arrendatarios
let datos = [
    {
        id: 1,
        nombre: "Ben Esparza",
        rfc: "ESPARZA17",
        propiedades: [2,1]
    },
    {
        id: 2,
        nombre: "Luisa Pacheco",
        rfc: "PACHECO16",
        propiedades: [1]
    },
    {
        id: 3,
        nombre: "Brandon Estrada",
        rfc: "ESTRADA29",
        propiedades: [2,3]
    }
    ]
    
    const getAll= function(){
        return datos
    }
    const busquedaPorID= function(id){
        return datos.find(x=>x.id==id)
    }
    
    const agregar=function(p){
        datos.push({id: datos.length+1, nombre: p.nombre, rfc: p.rfc,propiedades: p.propiedades})
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

    const postPropiedad=function(id,propiedad){
        let p= busquedaPorID(id)
        let propiedades=p.propiedades
    
        if(!propiedades.includes(propiedad)){
            console.log("No contiene propiedad "+ propiedad)
            propiedades.push(propiedad)
            borrar(id)
            let nuevo= {...p,propiedades:propiedades}
            datos.splice(id-1,0,nuevo)
    
            console.log("\nse agrega")
        }else{
            console.log("Si contiene propiedad "+ propiedad)
        }
        return p
    }
    
    const putPropiedad=function(id,propiedad){
        let p= busquedaPorID(id)
        let propiedades=p.propiedades
        console.log("contenido"+propiedades);
        for(a=0;a<=propiedades.length;a++){
            if(propiedades[a]==propiedad){
                console.log("Si contiene propiedad "+ propiedad)
                let aux= propiedades.findIndex(x=> x=propiedad)
                propiedades.splice(aux,1)
                borrar(id)
                let nuevo= {...p,propiedades:propiedades}
                datos.splice(id-1,0,nuevo)
            }else{
                console.log("No contiene propiedad "+ propiedad)
            }
        }
    }

        const arrendarPropiedad=function(id,propiedad){
            let p= busquedaPorID(id)
            let propiedades=p.propiedades
            console.log("contenido"+propiedades);
            for(a=0;a<=propiedades.length;a++){
                if(propiedades[a]==propiedad){
                    console.log("Si contiene propiedad "+ propiedad)
                    let aux= propiedades.findIndex(x=> x=propiedad)
                    propiedades.splice(aux,1)
                    borrar(id)
                    let nuevo= {...p,propiedades:propiedades}
                    datos.splice(id-1,0,nuevo)
                }else{
                    console.log("No contiene propiedad "+ propiedad)
                }
            }
        
        return p
    }
    
    const getPropiedades=function(id){
        return busquedaPorID(id).propiedades
    }
    
    module.exports={
        getAll,
        busquedaPorID,
        agregar,
        borrar,
        actualizar,
        postPropiedad,
        putPropiedad,
        getPropiedades,
        datos
    }