function bulbsV1(N, P) {
  console.time("bulbsV1");
  const garland = Array(N);
  P.map((p) => {
    for (let i = 0; i < garland.length; i += p) {
      garland[i] = !garland[i];
    }
  });

  let amount = 0;
  for (let i = 0; i < garland.length; i++) {
    if (garland[i]) {
      amount++;
    }
  }
  console.timeEnd("bulbsV1");

  return amount;
}

function bulbsV2(N, P) {
  console.time("bulbsV2");
  let amount = 0;

  for (let i = 0; i < N; i++) {
    let count = 0;
    P.map((p) => {
      if (i % p) {
        count++;
      }
    });
    if (count & 1) {
      amount++;
    }
  }

  console.timeEnd("bulbsV2");

  return amount;
}

const N = 172;
const P = [19, 2, 7, 13, 40, 23, 16, 1, 45, 9];

console.log(bulbsV1(N, P));

console.log(bulbsV2(N, P));
