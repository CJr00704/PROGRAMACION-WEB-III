/**Proporcione un ejemplo para convertir un callback en una promesa.*/

function funcionCallback(cb){
    setTimeout(()=>{
        cb("Listo");
    },1000);
}

function convertirAPromesa(){
    return new Promise(resolve=>{
        funcionCallback(resolve);
    });
}
convertirAPromesa().then(res => console.log(res));