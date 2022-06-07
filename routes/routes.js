/*jshint esversion: 6 */

//importar modulos 
const express = require('express');
const path = require('path');

//Creamos un objeto de Router Express
const router = express.Router();

//Exportar nuestro modulo ROUTES
module.exports = router;

//Redirecciones a las paginas
router.get('/', (req, res) =>{
   res.render('pages/venta-compra');
});

router.get('/tipo-cambio', (req, res) =>{
    res.render('pages/TipoCambio',);
});

router.get('/reporte', (req, res) =>{
    res.render('pages/reporte');
});

router.post('/tipo-cambio',(req,res)=>{
    const datosUsuario = [{
        Cambio : req.body.TipoCambio
    }]
    //res.render('pages/venta-compra',{dU:datosUsuario});
    console.log(req.body.TipoCambio);
});