let fs = require('fs');
let dbConcesionaria = JSON.parse(fs.readFileSync(__dirname + '../../data/concesionarias.json','utf-8'));

const marcas = {
    marcas:function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write('Nuestras marcas son : ' + '\n\n')
        let idMarca = req.params.auto;
        dbConcesionaria.forEach(function (concesionaria){
            concesionaria.autos.forEach((auto)=>{
                if(auto.marca != idMarca){
                    res.write('Marca : ' + auto.marca + '\n') 
                }
        })
    });
    res.end()
    },
    idAuto: function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        
        dbConcesionaria.forEach(function (concesionaria){   
           concesionaria.autos.forEach((auto)=>{ 
            res.write('Nuestros autos de la marca ' + auto.marca + ' son :' + '\n\n')
                let laMarca = req.params.auto;
                if(auto.marca != laMarca ){
                    res.write('Marca : ' + auto.marca+'\n')
                    res.write('Modelo : ' + auto.modelo+'\n')
                    res.write('Año : ' + auto.anio+'\n\n')
                }
    })
});
res.write('No existe esa marca '+'\n\n')
res.write('Por favor verifique lo que coloco :'+'\n\n')
res.end()           
}

}

module.exports = marcas
