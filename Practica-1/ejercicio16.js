/** Proporcione un ejemplo para migrar una función con promesas a async/await.*/

//PROMESA
/*function obtener(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Datos"),1000);
    });
}
obtener().then(res=>console.log(res));*/

//ASYNC/WAIT
async function obtener(){
    return "Datos";
}
async function main(){
    const res=await obtener();
    console.log(res);
}
main();