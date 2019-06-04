function sayHello(name) {
  const str = `Hello ${name}`;
  console.log(str);
  return str;
}

sayHello("Ironhackers"); // invocar function

const anotherWayToSayHello = sayHello; // asignacion de la funcion

const anotherVar = sayHello("Pablito"); // anotherVar = Hello pablito

anotherWayToSayHello("Manoletes");

const anonymousFunc = function() {
  console.log("soy una función anónima");
};

const arr = ["Antonio", "Tash", "Cristina", "Victor"];

// arr.forEach(sayHello);
arr.forEach(function(name, index, originalArray) {
  console.log(`${index}: ${name}`, originalArray);
});
