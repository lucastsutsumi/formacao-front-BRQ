let var1 = 'texto';
let var2 = 5;
let var3 = true;

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);

var1 = 3;
var2 = true;
var3 = 'texto';

/* Console
  index.ts:9:1 - error TS2322: Type 'number' is not assignable to type 'string'.
  9 var1 = 3;

  index.ts:10:1 - error TS2322: Type 'boolean' is not assignable to type 'number'.
  10 var2 = true;

  index.ts:11:1 - error TS2322: Type 'string' is not assignable to type 'boolean'.
  11 var3 = "texto";

  Found 3 errors in the same file, starting at: index.ts:9
*/

/* 
  Quando declarado um valor com typescript, o mesmo ja realiza a "type inference".
  Ele realiza a tipagem de forma inteligente de forma que uma variavel que recebeu o valor de um certo tipo, 
  nao pode ser reatribuida recebendo um valor que nao seja do mesmo tipo. 
*/

export {};
