/*Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.
let obj = miFuncion(“euforia”)
console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }*/

const vocales={
    a:0,
    e:0,
    i:0,
    o:0,
    u:0
}
const miFuncion=(x)=>{    
    let a=vocales.a;
    let e=vocales.e;
    let i=vocales.i;
    let o=vocales.o;
    let u=vocales.u;
    for(let j=0;j<x.length;j++){
        if(x[j]==="a")
            a++;
        if(x[j]==="e")
            e++;
        if(x[j]==="i")
            i++;
        if(x[j]==="o")
            o++;
        if(x[j]==="u")
            u++;
    }
    return {a,e,i,o,u};
}
let obj= miFuncion("euforia");
console.log(obj);   //{ a: 1, e: 1, i: 1, o: 1, u: 1 }