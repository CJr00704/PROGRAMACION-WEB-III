/*Proporcione un ejemplo concreto de encadenamiento de promesas.*/

function promesa(){
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 1000);
    });
}
promesa()
    .then(num => num * 2)
    .then(num => num + 3)
    .then(resultado => console.log(resultado)); //13