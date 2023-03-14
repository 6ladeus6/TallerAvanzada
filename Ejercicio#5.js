function calcularSalario(licenciasVendidas){
    let salrioLicencias = 1500000 * licenciasVendidas 
    let salarioNeto = (3500000 + salrioLicencias) - ((3500000 + salrioLicencias)*5)/100
    return salarioNeto
}

console.log("El salario neto es: ",calcularSalario(2));
