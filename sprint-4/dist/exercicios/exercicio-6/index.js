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
}
const conta = new Conta('4456', '123456', 100);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.setAgencia = '3345';
conta.setNumConta = '987654';
console.log('Nova agencia: ' + conta.getAgencia);
console.log('Nova conta: ' + conta.getNumConta);
