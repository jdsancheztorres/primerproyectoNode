
let cursos = [
    {
        id: 1,
        nombre: 'Curso Node.JS',
        duracion: 32,
        valor: 0
    },
    {
        id: 2,
        nombre: 'Ingles',
        duracion: 64,
        valor: 200000
    },
     {
        id: 3,
        nombre: 'Bolsa de valores',
        duracion: 6,
        valor: 150000
    }
];


let imprimirCurso1=(nombreCurso, callback)=>{
    setTimeout(function(){
        let curso = cursos.find( cursos => cursos.nombre == nombreCurso)
        resultado = "El curso se llama " + curso.nombre + " tiene una duracion de " +curso.duracion 
        + " horas y un valor de " + curso.valor + " pesos";
        callback(resultado);
    }, 2000)
}
let imprimirCurso2=(nombreCurso, callback)=>{
    setTimeout(function(){
        let curso = cursos.find( cursos => cursos.nombre == nombreCurso)
        resultado = "El curso se llama " + curso.nombre + " tiene una duracion de " +curso.duracion 
        + " horas y un valor de " + curso.valor + " pesos";
        callback(resultado);
    }, 2000)
}
let imprimirCurso3=(nombreCurso, callback)=>{
    setTimeout(function(){
        let curso = cursos.find( cursos => cursos.nombre == nombreCurso)
        resultado = "El curso se llama " + curso.nombre + " tiene una duracion de " +curso.duracion 
        + " horas y un valor de " + curso.valor + " pesos";
        callback(resultado);
    }, 2000)
}
let buscarCurso=(idCurso)=>{
    let curso = cursos.find( cursos => cursos.id == idCurso)
    return curso;
}


module.exports={
    imprimirCurso1,
    imprimirCurso2,
    imprimirCurso3,
    buscarCurso
}