let count = 0;

let myArray = ["a", "b", "c"];

function one() {
  console.log("Function one called..");
  count++;
  two();
}
function two() {
  console.log("Function two called..");
  count++;
  three();
}
function three() {
  console.log("Function three called..");
  count++;
  four();
}
function four() {
  count++;
  console.log("Function four called..");
  five();
}

const five = async () => {
  //   //   let users = await fetch("https://github.com/users");
  //   //   console.log(users);
  //   setTimeout(() => {
  //     console.log("hello");
  //   }, 1000);

  await fetch("https://api.github.com/users", [
    { method: "GET", headers: "abc" },
  ])
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

function incrementCount() {
  count++;
}

one();
