/*Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 } */

const miFuncion=(x)=>{
    let max=x[0];let min=x[0];
    for(let i=0;i<x.length;i++)
    {
        if(x[i]>max)
        {
            max=x[i]
        }
        if(x[i]<min)
        {
            min=x[i];
        }
    }
    return {mayor: max,menor: min}
}
let obj=miFuncion([3,1,5,4,2])
console.log(obj)    // { mayor: 5, menor: 1 }