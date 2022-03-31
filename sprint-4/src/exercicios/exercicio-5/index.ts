function tipoParametro<T>(parametro: T) {
  console.log(typeof parametro);
  return parametro;
}

tipoParametro('Lucas');
tipoParametro(1);
tipoParametro(true);

export {};
