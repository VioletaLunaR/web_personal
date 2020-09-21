const { parse } = require("path");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let url1 =
    "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json";
let url2 = 'https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json';

function urlPomise(url) {
    let myPromise = new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function () {
            if (req.status == 200) {
                console.log("Petición ok");
                resolve(req.responseText);
            }
            else {
                console.log("La petición falló")
            }
        };
        req.send()

    });
    return myPromise;
}
let data1;
let data2;
let prom1 = urlPomise(url1);
let prom2 = urlPomise(url2);


prom2.then((answer) => {
    data2 = JSON.parse(answer);
    let result = searchMax(data2);
    let idmax = result[0];
    let canti = result[1];
    let name = '';
    prom1.then((answer) => {
        data1 = JSON.parse(answer);
        name=getName(idmax,data1);
        console.log('El producto más vendio es ' + name + ' con una cantidad de ventas de '+ canti);
    }); 
});

function searchMax(data) {
    let max = 0;
    let idmax = 0;
    tam=data.length;
    for (let i=0; i<tam; i++)
    {
        let cant = parseInt(data[i]['cantidad']);
        let id =data[i]['idproducto']; 

        for (let j=i+1; j<tam; j++)    
        {
            if(data[j]['idproducto']===id){
                cant+=parseInt(data[i]['cantidad']);
                data.splice(j,1);
                tam--;
            }  
        }
        if (parseInt(cant,10) > parseInt(max,10)) {
            max = cant;
            idmax = id;
        }
    }
    return [idmax, max];
}

function getName(id, data) {
    let name ='';
    data.forEach(producto => {
        if (producto['idproducto'] === id) {
            name= producto['nombreProducto'];
        }
    });
    return name;
}

