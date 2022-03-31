function sum(a: any, b: any) {
  return a + b;
}

console.log(sum(1, 1));
//result 2 - com dois numeros a funcao somente soma os dois.

console.log(sum('1', 1));
//result 11 - quando tem a soma de uma string mais um numero a funcao faz uma concatenacao

console.log(sum('1', '1'));
//result 11 - quando tem a soma de uma string mais outra sting funcao faz uma concatenacao

//no exemplo acima podemos ver que: como nao tem uma tipagem dos dados a serem inseridos o resultado se torna inesperado

export {};
