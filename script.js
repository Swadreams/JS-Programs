console.log("Show me in console.");
// console.log(myvar);
console.error("this is error");
console.dir(document.URL);
console.table([
  { name: "ABC", email: "test@test.com" },
  { name: "ABC", email: "test@test.com" },
]);
console.group("Group1");
console.log("Log 1");
console.log("Log 1");
console.log("Log 1");
console.log("Log 1");
console.groupEnd("Group1");
console.log("I am from snippet");

function getUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = () => {
    if (this.status === 200) {
      console.log("Users returned", this.responseText);
    }
  };

  xhr.send();
}

function fetchUsers() {
  fetch("https://api.github.com/users").then((res) => {
    console.log(res.json());
  });
}

function testFunction(arg) {
  alert("Hello");
}
