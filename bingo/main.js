function createColumn(col) {
  const source = [];
  for (let i = 0; i < 15; i++) {
    // 1 ... 15
    // source[i] = i + 1 + 15 * 0;
    // 16 ... 30
    // source[i] = i + 1 + 15 * 1;
    // 31 ... 45
    // source[i] = i + 1 + 15 * 2;
    source[i] = i + 1 + 15 * col;
  }

  const b = [];
  for (let i = 0; i < 5; i++) {
    b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  }

  console.log(b);
}

const columns = [];
columns[0] = createColumn(0);
columns[1] = createColumn(1);
columns[2] = createColumn(2);
columns[3] = createColumn(3);
columns[4] = createColumn(4);
var num = [];








