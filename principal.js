const {imprimirCurso1, imprimirCurso2, imprimirCurso3, buscarCurso} = require('./modelo')

const opciones = {
    id : {
        demand :true,
        alias: 'i'
    },
    nombre : {
        demand : true,
        alias: 'n'
    },
    cedula : {
        demand : true,
        alias: 'x'
    }

}
const argv =  require('yargs').command('inscribir','Inscribirme en un curso', opciones).argv

let accion = argv['_'];
if(accion == 'inscribir'){
    const fs = require('fs')
    var idCurso = parseInt(argv.id, 10)
    curso = buscarCurso(idCurso);
    if(curso == undefined){
        console.log("El curso a inscribirse no se encuentra disponible en el catalogo de cursos de la U.")
    } else{
        texto = "El estudiante " + argv.nombre + "\ncon cedula No." + argv.cedula 
        +  "\nse ha inscrito al curso de " + curso.nombre + ", que tiene una duracion de " + curso.duracion + 
        " horas y el valor de $" + curso.valor + "\n";
        fs.writeFile('matriculas.txt', texto,(err)=>{
            if (err) throw (err);
            console.log('Se ha creado el archivo correctamente')
        })
    }
} else {
    nombreCurso  = "Curso Node.JS";
        imprimirCurso1(nombreCurso, function(resultado){
        console.log(resultado);
    })

    nombreCurso2  = "Ingles";
        imprimirCurso2(nombreCurso2, function(resultado){
            console.log(resultado);
    })

    nombreCurso3 = "Bolsa de valores";
    imprimirCurso3(nombreCurso3, function(resultado){
        console.log(resultado);
    })
}


