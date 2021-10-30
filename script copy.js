console.log("Hello there");
// console.error("I am error");

// console.log(abc);

let person = {
  name: "abc",
  age: 20,
};

console.table([person]);

console.group("Group");
console.log("one");
console.log("two");
console.groupEnd("Group");
console.info("I am more info");
console.warn("I am warning");

function showAlert(arg) {
  alert("Hello, Can you see me?");
}
