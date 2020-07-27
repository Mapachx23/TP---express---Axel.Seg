let fs = require('fs');
let dbConcesionaria = JSON.parse(fs.readFileSync(__dirname + '../../data/concesionarias.json','utf-8'));

const sucursales = {
    diretel:function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write('Nuestras sucursales son : ' + '\n\n')
        dbConcesionaria.forEach((nombre) => {
            res.write(' Sucursal:')
            res.write(nombre.sucursal+'\n\n') 
            res.write('Dirección:')
            res.write(nombre.direccion+'\n\n')
            res.write('Telefono:')
            res.write(nombre.telefono+'\n\n')
        });
        res.end()
    },
    idSucursal: (req,res) =>{
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
            let idSucursal = req.params.sucursal;
            dbConcesionaria.forEach(function (concesionaria){
                if(concesionaria.sucursal == idSucursal){
                    res.write( 'Sucursal : ' + concesionaria.sucursal +'\n')
                    res.write( 'Direccion: ' + concesionaria.direccion +'\n')
                    res.write( 'Telefono: '+ '# ' + concesionaria.telefono +'\n\n')
                    res.write('Tenemos disponibles: ' + concesionaria.autos.length + ' auto/os '+'\n\n' )
                    res.write(' Autos '+ '\n\n')
                    concesionaria.autos.forEach((auto)=>{
                    res.write( 'Marca: ' + auto.marca + '\n')
                    res.write( 'Modelo: ' + auto.modelo +'\n')
                    res.write( 'Año: ' + auto.anio + '\n')
                    res.write( 'Color: ' + auto.color +'\n\n' )
                    })  
                }
                });
                res.write('No existe la sucursal que esta solicitando'+'\n\n')
                res.write('Por favor pruebe con las siguientes opciones :'+'\n\n')
                dbConcesionaria.forEach((sucursales) => {
                res.write( sucursales.sucursal + '\n\n')

        });
                res.end()   
} 
}


module.exports = sucursales;