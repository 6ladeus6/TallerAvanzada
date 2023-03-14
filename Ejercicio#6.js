let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 10));
let contarEdadRepetida = 0

function contadorEdad(){
    let contarEdadRepetida = 0
    for (let index = 1; index < miarray.length; index++) {
        const element = miarray[index];
        // console.log(element);
        if (miarray[index] == miarray[index+1]) {
            contarEdadRepetida ++
        }
    }
    console.log(contarEdadRepetida);
}

contadorEdad()


/* miarray.forEach(function(item){
    console.log(item+1);
    if(miarray.item == miarray.item+1){
        contador++
    }
})

console.log(contador);
 */





