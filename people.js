// Object oriented programming exercise

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.planet = 'Earth';
  }

  changeName(newName) {
    this.name = newName;
  }

  birthday() {
    this.age += 1;
  }

  addHeight(height) {
    this.height = height;
  }
}

// const nate = new Person('Nate', 35, 180);
// nate.addHeight(180);
// console.log(nate.name, nate.age);
// console.log(nate.height);

// nate.birthday();
// console.log(
//   nate.name +
//     ' is ' +
//     nate.height +
//     ' tall and he just turned ' +
//     nate.age +
//     '!!!'
// );

class Employee extends Person {
  constructor(name, age, height) {
    super(name, age, height);
  }
}

// const newEmployee = new Employee('Nate', 30, 190);
// console.log(newEmployee.name);
// console.log(newEmployee.age);
// console.log(newEmployee.height);
// console.log(newEmployee.planet);

class Student extends Person {
  constructor(name, age, height, id) {
    super(name, age, height);
    this.id = id;
  }
}

const newStudent = new Student('Amy', 35, 150, 455);
console.log('Name:', newStudent.name);
console.log('Age:', newStudent.age);
console.log('Origin:', newStudent.planet);
console.log('Height:', newStudent.height);
console.log('ID #:', newStudent.id);

//Person > Student/Employee

//Homework:
//Vehicle > Sedan/Hatchback > Brand
