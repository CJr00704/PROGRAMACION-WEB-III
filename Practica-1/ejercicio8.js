/*Realizar un código para ejecutar una función callback después 2 segundos.*/

function ejecutar(callback){
    setTimeout(()=>{
        callback();
    },2000);
}
ejecutar(()=>{
    console.log("Se ejecutó después de 2 segundos");
});