let fs = require('fs');
let dbConcesionaria = JSON.parse(fs.readFileSync(__dirname + '../../data/concesionarias.json','utf-8'));

const autos = {
    deAutos: (req,res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
       
        res.write('Nuestros autos son : ' + '\n\n')
        dbConcesionaria.forEach(function (concesionaria){
            concesionaria.autos.forEach((auto)=>{
                res.write( 'Marca : ' + auto.marca + '\n')
                res.write( 'Modelo :' + auto.modelo +'\n')
                res.write( 'Año :' + auto.anio + '\n')
                res.write( 'Color :' + auto.color +'\n\n' )
                })
            })
            res.end()    
    }    
    }        

module.exports = autos