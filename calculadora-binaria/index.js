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

    let newVal = String(valor).split("").reverse()
    let result = 0
    let binary = 1
    newVal.forEach(element => {

        if (element > 0) result += binary

        if (binary == 1) binary++
        else binary = binary * 2

    });

    return result
}

/*
console.log(`0 = ${convertirBinarioDecimal(0)}`)
console.log(`1 = ${convertirBinarioDecimal(1)}`)
console.log(`2 = ${convertirBinarioDecimal(10)}`)
console.log(`3 = ${convertirBinarioDecimal(11)}`)
console.log(`4 = ${convertirBinarioDecimal(100)}`)
console.log(`5 = ${convertirBinarioDecimal(101)}`)
console.log(`6 = ${convertirBinarioDecimal(110)}`)
console.log(`7 = ${convertirBinarioDecimal(111)}`)
console.log(`181 = ${convertirBinarioDecimal(10110101)}`)
console.log(`255 = ${convertirBinarioDecimal(11111111)}`)
*/

exports.convertirBinarioDecimal = convertirBinarioDecimal