let miarray = Array.from({length: 20}, () => Math.floor(Math.random() * 10));


function contadorEdad(){
    let contarEdadRepetida = 0
    for (let index = 1; index < miarray.length; index++) {
        console.log(miarray[index]);
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





