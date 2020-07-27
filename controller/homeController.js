let fs = require('fs');
let dbConcesionaria = JSON.parse(fs.readFileSync(__dirname + '../../data/concesionarias.json','utf-8'));

 const home = {
    index : (req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.write('Bienvenidos al concecionario Online Segovia'+ '\n\n')
    res.write('Nuestras sucursales son : ' + '\n\n')
    
    dbConcesionaria.forEach((sucursales) => {
        res.write( sucursales.sucursal + '\n\n')
});
res.end()
}
}

module.exports = home