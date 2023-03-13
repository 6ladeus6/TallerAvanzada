
let naveUno = "ARQ2555 Sara Bel-Sun"
let naveDos = "ARQ2556 Nodin Chavdri"
let naveTres = "ARQ2557 Finn"


function buscarPiloto(codigo) {
    if (codigo == "ARQ2555"){
        let pilotoUno = naveUno.split("ARQ2555")
        console.log(pilotoUno[1]);
    }else if(codigo == "ARQ2556"){
        let pilotoDos = naveDos.split("ARQ2556")
        console.log(pilotoDos[1]);
    }
    else{
        let pilotoTres = naveTres.split("ARQ2557")
        console.log(pilotoTres[1]);
    }
}
buscarPiloto("ARQ2557")



