/*Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false*/

const miFuncion=(x)=>{
    let invertido="";
    for(let i=x.length-1;i>=0;i--)
    {
        invertido+=x[i];
    }
    return x===invertido;
}
//let band=miFuncion(“oruro”)
//console.log(band)    //true
let band=miFuncion("hola")
console.log(band)   //false