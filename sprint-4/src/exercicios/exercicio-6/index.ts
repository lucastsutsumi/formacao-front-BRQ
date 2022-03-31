class Conta {
  private agencia: string;
  private numConta: string;
  private saldo: number;

  constructor(agencia: string, numConta: string, saldo: number) {
    this.agencia = agencia;
    this.numConta = numConta;
    this.saldo = saldo;
  }

  set setAgencia(agencia: string) {
    this.agencia = agencia;
  }

  get getAgencia(): string {
    return this.agencia;
  }

  set setNumConta(numConta: string) {
    this.numConta = numConta;
  }

  get getNumConta(): string {
    return this.numConta;
  }

  get getSaldo(): number {
    return this.saldo;
  }
}

const conta = new Conta('4456', '123456', 100);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);

conta.setAgencia = '3345';
conta.setNumConta = '987654';
console.log('Nova agencia: ' + conta.getAgencia);
console.log('Nova conta: ' + conta.getNumConta);

export {};
