function crasher(a) {
  delete a.bla;
}

const a = {
  bla: "bla",
};

// начало блока изменений

// version 1
{
  let a = {};
  crasher(a);
}

// version 2
// Object.defineProperty(a, "bla", { configurable: false });
// crasher(a);

// конец блока изменений

console.log(a);
