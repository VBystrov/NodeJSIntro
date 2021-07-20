function makeIncreaser(num) {
  let increment = 2;
  return function () {
    if (num % 5 === 0 && num !== 0) {
      increment = 3;
      return (num /= 5);
    }
    if (num % 7 === 0 && num !== 0) {
      increment = 1;
      return (num -= 7);
    }
    return (num += increment);
  };
}

const increaser = makeIncreaser(1);

for (let i = 0; i < 30; i++) {
  console.log(increaser());
}
