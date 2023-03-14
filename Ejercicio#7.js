let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 10));

function clasificarNumeros() {
    for (let index = 0; index < miarray.length; index++) {
        console.log(miarray[index])
        if (miarray[index] < 0.5) {
            console.log("El mas cercano a cero es: ", miarray[index])
        }else if (miarray[index]< 0){

            console.log(Math.abs(miarray[index]))

        }
        
    }
}
clasificarNumeros()