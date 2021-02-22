//Traversing the DOM

/*const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children);
*/

const card = document.querySelector('.card');
//console.log(card.children[0]);



//Traversing del hijo al padre
//console.log(card.parentElement.parentElement.parentElement);

//Traversing entre etiquetas hermanas (al mismo nivel en el DOM)
//console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);