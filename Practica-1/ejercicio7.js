/*Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración.*/

const arr=[10,20,30,40,50];
const [a,b,...resto]=arr;
console.log(resto);     //[30, 40, 50]