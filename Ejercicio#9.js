function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante){
    setTimeout(function(){
        let estudiante = {
            nombre: nombre,
            edad: edad,
            planeta: planeta,
            estatura: estatura
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}

crearEstudiante("Pedro","Marte",16,1.86, function(edad){
    edad < 15 ? (console.log("Manejo de la fuerza")) : (console.log("Manejo del sable de luz"))
})