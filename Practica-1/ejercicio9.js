/*Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.*/

function devuelve(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Éxito después de 3 segundos");
        },3000);
    });
}
devuelve()
    .then((mensaje)=>console.log(mensaje))    //"Éxito después de 3 segundos"