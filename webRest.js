const puerto = 4001;
const cors = require("cors");
const express = require('express')
const bodyParser = require('body-parser');
const funcPropietarios = require("./Controladores/funcPropietarios");
const funcArrendatarios = require("./Controladores/ffuncArrendatarios")
const FuncPropiedades = require("./Controladores/funcPropiedades")
const app= express();
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meta 2.2</title>
            <style> 
                body{
                    background-color:rgb(255, 255, 255);
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
                }
    
                h1{
                    color: rgb(255,255,255);
                    text-align: center;
                }

                h3{
                    color: rgb(255,255,255);
                    text-align: center;
                }
    
                .headerDiv{
                    padding: 10px;
                    background-color:rgb(89, 132, 191);
                }
                .inputDiv{
                    border-radius: 10px;
                    background-color: rgba(255, 255, 255, 255);
                    margin-top: 10px;
                    margin-left: 5px;
                    margin-right: 5px;
                    padding: 10px;
                }
    
           
            </style>
        </head>
        <body>
            <div class="headerDiv">
                <h1>Meta 2.2<br>Servicio web rest</h1><br>
                <h3>Nombre: <br> Esteban Benjamin Hinojosa Esparza</h3>
                <br><h3>Matricula:<br> 01171600</h3>
            
            
        </body>
    </html>
    `)
});

//getters de propiedades
app.get("/propiedades",FuncPropiedades.getAll);
app.get("/propiedades/:id",FuncPropiedades.getPropiedad);
app.get("/propiedades/:id/propietarios",FuncPropiedades.getPropietarios);
app.get("/propiedades/:id/arrendatario",FuncPropiedades.getArrendatario);
//getters de propietarios
app.get("/propietarios",funcPropietarios.getAll);
app.get("/propietarios/:input",funcPropietarios.getPropietario);
app.get("/propietarios/:id/propiedades",funcPropietarios.getPropiedades);
//getters de arrendatarios
app.get("/arrendatarios/:id/propiedades",funcArrendatarios.getPropiedades);
app.get("/arrendatarios",funcArrendatarios.getAll);
app.get("/arrendatarios/:input",funcArrendatarios.getArrendatario);

//Posts
app.post("/propietarios",funcPropietarios.postPropietario);
app.post("/arrendatarios/",funcArrendatarios.postArrendatario);
app.post("/propiedades/",FuncPropiedades.postPropiedad);

//Actualizar
app.patch("/propietarios/:input",funcPropietarios.patchPropietario);
app.patch("/arrendatarios/:input",funcArrendatarios.patchArrendatario);
app.patch("/propiedades/:id",FuncPropiedades.patchPropiedad);

//Eliminar
app.delete("/propietarios/:input",funcPropietarios.deletePropietario);
app.delete("/arrendatarios/:input",funcArrendatarios.deleteArrendatario);
app.delete("/propiedades/:id",FuncPropiedades.deletePropiedad);

//Liberar
app.put("/propiedades/liberar/:id",FuncPropiedades.liberar);
app.put("/arrendatarios/liberar/:id/:propiedad",funcArrendatarios.putPropiedad);
app.put("/propietarios/liberar/:id/:propiedad",funcPropietarios.putPropiedad);

//Arrendar
app.put("/propiedades/arrendar/:id/:arrendatario",FuncPropiedades.arrendar);
app.put("/arrendatarios/arrendar/:id/:propiedad",funcArrendatarios.putPropiedad);
app.put("/propietarios/agregar/:id/:propiedad",funcPropietarios.postPropiedad);

app.listen(puerto,()=>{
    console.log('Servidor escuchando por el puerto: ',puerto)
}).on('error',error=>{
    console.log('Error al iniciar el servidor: ',error)
});