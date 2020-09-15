
const axios = require('axios');
const { fstat } = require('fs');
const http = require('http');
const url = require('url');
const fs = require('fs');
const { reduce } = require('async');

const url_proveedores = 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json';
const url_clientes = 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json';
var titulo = "Lista de ";


http.createServer((req, res) => {
  let urlsolicitada = url.parse(req.url).pathname;
  let datos;
  if (urlsolicitada === '/api/proveedores') {
    axios.get(url_proveedores).then((answer) => {
      datos = answer.data
      titulo = titulo + "proveedores";
      fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(' <h1 style="text-align: center;">' + titulo + '</h1> \
              <table class="table table-striped"> \
              <thead><tr> \
              <th scope="col">ID</th> \
              <th scope="col">Nombre compania</th> \
              <th scope="col">Contacto</th> \
              </tr> \
              </thead>\
              <tbody>');
        for (let i = 0; i < 29; i++) {
          res.write('<tr> \
                    <th scope="row">'+ datos[i].idproveedor + '</th> \
                    <td>'+ datos[i].nombrecompania + '</td> \
                    <td>'+ datos[i].nombrecontacto + '</td>\
                  </tr>)')
        };
        res.write('</tbody> \
                            </table>');
        res.end(data.toString());
      });
    });
  }
  else {
    axios.get(url_clientes).then((answer) => {
      datos = answer.data
      titulo = titulo + "clientes";
      fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(' <h1 style="text-align: center;">' + titulo + '</h1> \
              <table class="table table-striped"> \
              <thead><tr> \
              <th scope="col">ID</th> \
              <th scope="col">Nombre compania</th> \
              <th scope="col">Contacto</th> \
              </tr> \
              </thead>\
              <tbody>');
        for (let i = 0; i < 91; i++) {
          res.write('<tr> \
                    <th scope="row">'+ datos[i].idCliente + '</th> \
                    <td>'+ datos[i].NombreCompania + '</td> \
                    <td>'+ datos[i].NombreContacto + '</td>\
                  </tr>)')
        };
        res.write('</tbody> \
                            </table>');
        res.end(data.toString());
      });
    });

  }
}).listen(8081);