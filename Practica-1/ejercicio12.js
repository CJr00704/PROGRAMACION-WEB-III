/* Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.*/

//CALLBACK
/*cosole.log("Con CALLBACK")
setTimeout(()=>{
    console.log("Paso 1");
    setTimeout(()=>{
        console.log("Paso 2");
        setTimeout(()=>{
            console.log("Paso 3");
        },1000);
    },1000);
},1000);*/

//ASYNC/WAIT
console.log("Con ASYNC/WAIT")
const esperar=ms=>new Promise(res=>setTimeout(res,ms));
async function ejecutar(){
    await esperar(1000);
    console.log("Paso 1");
    await esperar(1000);
    console.log("Paso 2");
    await esperar(1000);
    console.log("Paso 3");
}
ejecutar();