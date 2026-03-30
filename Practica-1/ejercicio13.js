/*Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible*/

//PROMESA
function paso1(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(10),1000);
    });
}
function paso2(num){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(num*2),1000);
    });
}
function paso3(num){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(num+5),1000);
    });
}
paso1()
    .then(res1=>{
        return paso2(res1);
    })
    .then(res2=>{
        return paso3(res2);
    })
    .then(res3=>{
        console.log(res3); // 25
    });

//ASYNC/WAIT
async function ejecutar(){
    const res1=await paso1();
    const res2=await paso2(res1);
    const res3=await paso3(res2);
    console.log(res3); // 25
}
ejecutar();