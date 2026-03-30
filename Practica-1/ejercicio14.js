/*Proporcione un ejemplo para convertir una promesa en un callback.*/

function usarPromesa(callback){
    const promesa=new Promise(resolve=>{
        setTimeout(()=>resolve("Hola"),1000);
    });
    promesa.then(resultado=>callback(resultado));
}
usarPromesa((msg)=>{
    console.log(msg);
});