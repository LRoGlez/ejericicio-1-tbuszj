// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA USAR FILTER, RECORRER CON FOREACH
// Este filtrado deberá generar otro array con los usuar"ios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);
let array1 = [];
let array2 = [];

function createUsers() {
  const ob1 = {
    name: "usuario1",
    country: "spain",
    money: 199,
    premiumAccount: true
  };
  const ob2 = {
    name: "usuario2",
    country: "france",
    money: 0,
    premiumAccount: false
  };
  const ob3 = {
    name: "usuario3",
    country: "spain",
    money: 537,
    premiumAccount: false
  };
  const ob4 = {
    name: "usuario4",
    country: "italy",
    money: 1004,
    premiumAccount: true
  };
  const ob5 = {
    name: "usuario5",
    country: "spain",
    money: 250,
    premiumAccount: false
  };
  const ob6 = {
    name: "usuario6",
    country: "ireland",
    money: 799,
    premiumAccount: true
  };
  const ob7 = {
    name: "usuario7",
    country: "spain",
    money: 3345,
    premiumAccount: false
  };
  array1.push(ob1, ob2, ob3, ob4, ob5, ob6, ob7);
}

function onLoad() {
  createUsers();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i].country === "spain" && array1[i].money > 200) {
      array2.push(array1[i]);
    }
  }
  array1.forEach(element => console.log(element));
  console.log("-----------------------------");
  array2.forEach(element => console.log(element));
}
