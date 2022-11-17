const Empleado = require("../models/empleados.model");
let response ={
    msg: "",
    exito: false
}
// crear elemento en la bd
exports.create = function(req,res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
    })

    empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}
// bucar todos los elementos de la bd
exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}
// buscar 1 elemento de la bd
exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err, empleado){
        res.json(empleado)
    })
}
// cambiar o actualizar elementos
exports.update = function(req,res){
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se modifico correctamente"
        res.json(response)
    })
}
// eliminar elemento (completo) de la bd
exports.remove = function(req,res){
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se elimino correctamente"
        res.json(response)
    })
}