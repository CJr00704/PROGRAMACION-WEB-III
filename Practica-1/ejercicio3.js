/*Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}*/

let pares=[];let p=0;
let impares=[];let imp=0;
const miFuncion=(x)=>{
    for(let i=0;i<x.length;i++)
    {
        if(x[i]%2==0)
        {
            pares[p]=x[i];
            p++;
        }
        else
        {
            impares[imp]=x[i];
            imp++;
        }
    }
    return {pares,impares};
}
let obj=miFuncion([1,2,3,4,5]);
console.log(obj);   //{ pares: [2,4], impares: [1,3,5]}