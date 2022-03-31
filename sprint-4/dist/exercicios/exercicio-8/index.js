"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(agencia, numConta, saldo) {
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }
    set setAgencia(agencia) {
        this.agencia = agencia;
    }
    get getAgencia() {
        return this.agencia;
    }
    set setNumConta(numConta) {
        this.numConta = numConta;
    }
    get getNumConta() {
        return this.numConta;
    }
    get getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log('Valor para depósito inválido');
            return;
        }
        this.saldo += valor;
        this.imprimirSaldo();
    }
    sacar(valor) {
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
    imprimirSaldo() {
        console.log('O saldo atual é: ' + this.saldo);
    }
}
class ContaPF extends Conta {
    constructor(agencia, numConta, saldo, cpf) {
        super(agencia, numConta, saldo);
        this.cpf = cpf;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    get getCpf() {
        return this.cpf;
    }
    imprimirSaldo() {
        console.log('O saldo atual pessoa física é: ' + this.getSaldo);
    }
}
const contaPf = new ContaPF('4456', '123456', 100, '12345678912');
contaPf.depositar(100);
contaPf.sacar(100);
