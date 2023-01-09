//============OLD METHOD OF FUNCTION====================//

// console.clear();

// const name = prompt();

// function greet(name) {
//   return `Hello ${name}`;
// }

// console.log(greet(name));

//=============---------NEW METHOD USING ARROW FUNCTION===-----//

console.clear();

const name = prompt();

const greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet(name));
