let calcularDistancia = (x1,x2,y1,y2) => Math.sqrt( Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2))
console.log(`La distancia es de ${parseInt(calcularDistancia(2,6,12,2))} UA`)