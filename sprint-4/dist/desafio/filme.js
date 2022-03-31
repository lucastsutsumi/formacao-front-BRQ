"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(nome, ano, categorias, codFilme, similares, fotoCapa) {
        this.nome = nome;
        this.ano = ano;
        this.categorias = categorias;
        this.codFilme = codFilme;
        this.similares = similares;
        this.fotoCapa = fotoCapa;
    }
    getDados() {
        return {
            "nome": this.nome,
            "ano": this.ano,
            "categorias": this.categorias,
            "codFilme": this.codFilme,
            "similares": this.similares,
            "fotoCapa": this.fotoCapa,
        };
    }
    mudarDados(codFilme, dados) {
    }
}
exports.Filme = Filme;
