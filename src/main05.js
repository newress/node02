const color = ['red', 'blue', 'green', 'orange'];

const [car, bus,, my] = color;
console.log(car);
console.log(my);

//전개연산자 ...(spred//펼처놓음)
const fruit = ['apple', 'orange', 'banana'];
//console.log(fruit[0]);
//console.log(fruit[1]);
//console.log(fruit[2]);
console.log(...fruit);

function toOj(a, b, c){
  return {
    a:a,
    b:b,
    c:c
  }
};
console.log(toOj(fruit[0], fruit[1], fruit[2]));
console.log(toOj(...fruit));