let count = 0;

function incrementCount() {
  count++;

  setTimeout(() => {
    count++;
  }, 1000);
}

function one() {
  count++;
  two();
}
function two() {
  count++;
  three();
}
function three() {
  count++;
  four();
}
function four() {
  count++;
}

one();
