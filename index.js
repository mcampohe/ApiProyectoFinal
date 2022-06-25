const express = require('express');
const bodyparser = require('body-parser');
jsonParser = bodyparser.json();
const cors = require('cors');
const app = express();


let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
}

let items=[
    {
            id: "0",
            nombre:"Banda Elastica Negra",
            descripcion: "Banda de resistencia",
            precio : "14000",
            categoria : "BandaElastica",
            img : "./assets/images/bandaElastica1.jpg"
        },
        {
            id: "1",
            nombre:"Banda Elastica Roja",
            descripcion: "Banda de resistencia",
            precio : "8000",
            categoria : "BandaElastica",
            img : "./assets/images/bandaElastica2.jpeg"
        },
        {
            id: "2",
            nombre:"Banda Elastica Morada",
            descripcion: "Banda de resistencia",
            precio : "10000",
            categoria : "BandaElastica",
            img : "./assets/images/bandaElastica3.jpeg"
        },
        {
            id: "3",
            nombre:"Banda Elastica Verde",
            descripcion: "Banda de resistencia",
            precio : "12000",
            categoria : "BandaElastica",
            img : "./assets/images/bandaElastica4.jpeg"
        },
        {
            id: "4",
            nombre:"Banda Elastica Amarilla",
            descripcion: "Banda de resistencia",
            precio : "5000",
            categoria : "BandaElastica",
            img : "./assets/images/bandaElastica5.jpeg"
        },
        {
            id: "5",
            nombre:"Disco Olimpico 2.5kg",
            descripcion: "Disco Olimpico Engomado 2.5kg",
            precio : "10000",
            categoria : "Discos",
            img : "./assets/images/discoOlimpicoEngomado2-5kg.jpg"
        },
        {
            id: "6",
            nombre:"Disco Olimpico 5kg",
            descripcion: "Disco Olimpico Engomado 5kg",
            precio : "17000",
            categoria : "Discos",
            img : "./assets/images/discoOlimpicoEngomado5kg.jpg"
        },
        {
            id: "7",
            nombre:"Disco Olimpico 10kg",
            descripcion: "Disco Olimpico Engomado 10kg",
            precio : "22000",
            categoria : "Discos",
            img : "./assets/images/discoOlimpicoEngomado10kg.jpg"
        },
        {
            id: "8",
            nombre:"Disco Olimpico 15kg",
            descripcion: "Disco Olimpico Engomado 15kg",
            precio : "28000",
            categoria : "Discos",
            img : "./assets/images/discoOlimpicoEngomado15kg.jpg"
        },
        {
            id: "9",
            nombre:"Disco Olimpico 20kg",
            descripcion: "Disco Olimpico Engomado 20kg",
            precio : "35000",
            categoria : "Discos",
            img : "./assets/images/discoOlimpicoEngomado20kg.jpg"
        },
        {
            id: "10",
            nombre:"Paralelas Altas",
            descripcion: "Paralelas altas, workout",
            precio : "30000",
            categoria : "Paralelas",
            img : "./assets/images/paralelasAltas.jpeg"
        },
        {
            id: "11",
            nombre:"Mini Paralelas",
            descripcion: "Mini Paralelas, workout",
            precio : "16000",
            categoria : "Paralelas",
            img : "./assets/images/miniParalelas.jpeg"
        },
        {
            id: "12",
            nombre:"Paralelas Flexiones",
            descripcion: "Paralelas para flexiones, workout",
            precio : "8000",
            categoria : "Paralelas",
            img : "./assets/images/pushUp.jpeg"
        },
        {
            id: "13",
            nombre:"Rueda Abdominal",
            descripcion: "Rueda abdominal, trabajo de core",
            precio : "10000",
            categoria : "Otros",
            img : "./assets/images/ruedaAbdominal.jpeg"
        },
        {
            id: "14",
            nombre:"TRX",
            descripcion: "Implemento deportivo TRX",
            precio : "15000",
            categoria : "Otros",
            img : "./assets/images/trx.jpeg"
        },
        {
            id: "15",
            nombre:"Colchoneta",
            descripcion: "Colchoneta 50 x 80cm ",
            precio : "20000",
            categoria : "Otros",
            img : "./assets/images/colchoneta.jpeg"
        },
        {
            id: "16",
            nombre:"Bloque de magnesio",
            descripcion: "Bloque de magnecio 200gr",
            precio : "5000",
            categoria : "Magnesio",
            img : "./assets/images/bloqueMagnesio.jpg"
        },
        {
            id: "17",
            nombre:"Magnesio Liquido",
            descripcion: "Magnesio Liquido 50ml",
            precio : "8000",
            categoria : "Magnesio",
            img : "./assets/images/magnesioLiquido.jpeg"
        },
        {
            id: "18",
            nombre:"Magnesio en polvo",
            descripcion: "Magnesio en polvo 200gr",
            precio : "5000",
            categoria : "Magnesio",
            img : "./assets/images/magnesioEnPolvo.jpg"
        }
               
];

app.use(cors({
origin:'*'
}));

app.get('/', function(req, res){
    res.send("API Tienda Online v2");
});

//obtiene todos los productos
app.get('/products',jsonParser, function(req, res){
    respuesta = {
        error : false,
        codigo : 200,
        mensaje : items
    }
    res.send(respuesta);
});
//obtiene producto por id
app.get('/product/:id',jsonParser, function(req,res){
    let id = req.params.id;
    console.log("ID : ",id);
    respuesta = {
        error : false,
        codigo :200,
        mensaje: items[id]
    }
    res.send(respuesta);
    console.log("LLEGÓ AL METODO GET product");
});

//agregar producto
app.post('/product',jsonParser, function(req,res){
    if(!req.body){
        respuesta = {
            error: true,
            codigo :200,
        mensaje: "Error al crear nuevo producto"
        }
    }else{
        items.push(req.body)
        respuesta = {
            error: false,
            codigo :200,
        mensaje: items
        }
        res.send(respuesta);    
    }
  
});

//Eliminar un producto
app.delete('/product/:id',jsonParser, function(req,res){
    
    
   
});
//modificar un producto
app.put('/product/:id',jsonParser, function(req,res){
    let id = req.params.id;
    items[id].id = req.body.id;
    items[id].nombre = req.body.nombre;
    items[id].descripcion = req.body.descripcion;
    items[id].precio = req.body.precio;
    items[id].categoria = req.body.categoria;
    items[id].img = req.body.img;  
    console.log(items[id]);
    respuesta={
        error : false,
        codigo :200,
        mensaje: items[id]
    }
    res.send(respuesta);
    console.log("LLEGÓ AL METODO MODIFICAR");
});





app.listen(3000, ()=>{
    console.log("API ON PORT 3000!");
});