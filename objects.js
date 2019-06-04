const student = {
  name: "Guille"
}; // new Object()

console.log("before", student);
student.lastName = "Moreso";
console.log("after", student);

const property = "name";

console.log(`name is: ${student.name}`);
console.log(`lastName is: ${student["lastName"]}`);
console.log(`name is: ${student[property]}`);

student.dni = "12345667x";
console.log("before", student);
delete student.dni;
console.log("after", student);

for (key in student) {
  console.log(`key ${key} value ${student[key]}`);
}

console.log(Object.keys(student));
console.log(Object.values(student));

Object.keys(student).forEach(function(key) {
  console.log(`key ${key} value ${student[key]}`);
});

// student.sayOuch = function() {
//   console.log("Ouch! 🍩");
// };
// student.sayOuch();
