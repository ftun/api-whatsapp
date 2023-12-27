// SCRIPT PARA CONVERTIR BINARIO A DECIMAL

/*
PRUEBA EN VIVO
const convertirBinarioDecimal = (valor) => {

    let potencia = 2
    let newVal = String(valor).split("").reverse()
    let result = 0
    newVal.forEach(element => {
        if (element > 0) result += Math.pow(Number(element), potencia) // Number(element) * potencia
        potencia++
    });

    console.log(result)
}
*/

// CORRECCION POST PRUEBA:
const convertirBinarioDecimal = (valor) => {

    let potencia = 2
    let newVal = String(valor).split("").reverse()
    let result = 0
    newVal.forEach(element => {
        console.log(element)
        if (element > 0) result += Math.pow(Number(element), potencia) // Number(element) * potencia
        potencia++
    });

    console.log(result)
}

exports.convertirBinarioDecimal = convertirBinarioDecimal