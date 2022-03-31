function sum(a: any, b: any) {
  return a + b;
}

let items: string[] = [];
items.push('10', '12', '15', '20', '22');

items.forEach((item) =>
  console.log(`O valor ${item} somado com 1 = ${sum(item, 1)}`)
);

/*
  O valor 10 somado com 1 = 101
  O valor 12 somado com 1 = 121
  O valor 15 somado com 1 = 151
  O valor 20 somado com 1 = 201
  O valor 22 somado com 1 = 221
*/

export {};
