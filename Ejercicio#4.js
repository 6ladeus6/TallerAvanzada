let energiaSables = [1,2,-5,0,-3]

function revisarSables (energiaSables){
    contadorSablesDefectuosos = 0
    contadorSablesCorrectos = 0

    energiaSables.forEach(energiaNegativa => {
        if (energiaNegativa < 0) {
            contadorSablesDefectuosos++
        } else {
            contadorSablesCorrectos++
        }
    });
    console.log("La cantida de sables defectuosos son: ",contadorSablesDefectuosos);
    console.log("La cantida de sables correctos son: ",contadorSablesCorrectos);
}

revisarSables(energiaSables)