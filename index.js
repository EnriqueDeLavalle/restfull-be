var lib_express = require('express');
var cors = require('cors');
var miaplicacion = lib_express();
miaplicacion.use(cors());

/*miaplicacion.get('/', (req, res) =>{
    res.send('primera peticion');
});

miaplicacion.get('/otrapeticion', (req, res) =>{
    res.send('otra peticion');
  });*/

miaplicacion.get('/', (req, res) =>{
    res.send('primera peticion');
});

miaplicacion.post('/', (req, res) =>{
    res.send('primera peticion', req.body.mivariable);
});

miaplicacion.listen(3000,  ()=>{
    console.log("Server Up listening...")
});

