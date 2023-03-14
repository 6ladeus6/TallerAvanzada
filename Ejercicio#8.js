function crearPlaneta(nombrePlaneta,latitud,longitud,nivelOxigeno,volumenPlaneta,clasificarPlaneta){
    setTimeout(function(){
        let planeta = {
            nombrePlaneta: nombrePlaneta,
            latitud: latitud,
            longitud: longitud,
            nivelOxigeno: nivelOxigeno,
            volumenPlaneta: volumenPlaneta
        }
        clasificarPlaneta(planeta.volumenPlaneta)
    },1000)
}

let planetas = new Planetas(15).fill(crearPlaneta)

crearPlaneta("Pluton",13,15,20,33,function(volumenPlaneta,nivelOxigeno){
    let sumarVolumenAgua = 0
    planeta.forEach(element => {
        sumarVolumenAgua = planeta.volumenPlaneta + planeta.sumarVolumenAgua
    });
}) 
