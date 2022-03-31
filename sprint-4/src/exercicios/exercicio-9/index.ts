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

  public depositar(valor: number) {
    if (valor <= 0) {
      console.log('Valor para depósito inválido');
      return;
    }

    this.saldo += valor;
    this.imprimirSaldo();
  }

  public sacar(valor: number) {
    if (valor <= 0) {
      console.log('Valor solicitado inválido');
      return;
    }

    if (valor > this.saldo) {
      console.log('Valor solicitado maior que saldo atual');
      this.imprimirSaldo();
      return;
    }

    this.saldo -= valor;
    this.imprimirSaldo();
  }

  protected imprimirSaldo() {
    console.log('O saldo atual é: ' + this.saldo);
  }
}

interface IContaDigital {
  incluirPacoteServicoDigital: () => void;
}

class ContaPF extends Conta implements IContaDigital {
  private cpf: string;

  constructor(agencia: string, numConta: string, saldo: number, cpf: string) {
    super(agencia, numConta, saldo);
    this.cpf = cpf;
  }

  set setCpf(cpf: string) {
    this.cpf = cpf;
  }

  get getCpf() {
    return this.cpf;
  }

  protected imprimirSaldo() {
    console.log('O saldo atual pessoa física é: ' + this.getSaldo);
  }

  incluirPacoteServicoDigital() {
    console.log('Pacote incluido na conta do cliente');
  }
}

const contaPf = new ContaPF('4456', '123456', 100, '12345678912');
contaPf.incluirPacoteServicoDigital();

export {};
