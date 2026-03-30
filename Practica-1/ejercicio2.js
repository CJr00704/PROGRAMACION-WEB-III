/*Crear una función que invierta el orden de las palabras en una frase.
let cad = miFuncion(“abcd”)
console.log(obj) // dcba*/

const miFuncion=(x)=>{
    let aux="";
    for(let i=x.length-1;i>=0;i--)
        aux+=x[i];
    return aux;
}
let cad=miFuncion("abcd");
console.log(cad);   //dcba