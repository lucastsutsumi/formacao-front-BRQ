"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
const CATALOGO = [];
class Catalogo {
    constructor(catalogo) {
        CATALOGO.push(...catalogo);
    }
    adicionar(filme) {
        CATALOGO.push(filme);
    }
    remover(codFilme) {
        const filme = this.encontrarFilme(codFilme);
        if (!filme) {
            return console.error('filme nao existe no catalogo');
        }
        const index = CATALOGO.indexOf(filme);
        CATALOGO.splice(index, 1);
    }
    atualizar(codFilme, filme) {
        const filmeAntigo = this.encontrarFilme(codFilme);
        if (!filmeAntigo) {
            return console.error('Filme nao existe');
        }
        const index = CATALOGO.indexOf(filmeAntigo);
        let novoFilme = Object.assign(Object.assign({}, filmeAntigo), filme);
        CATALOGO.splice(index, 1, novoFilme);
        return novoFilme;
    }
    listaFilmes() {
        return [...CATALOGO];
    }
    encontrarFilme(codFilme) {
        return CATALOGO.filter((filme) => filme.codFilme === codFilme).pop();
    }
}
exports.Catalogo = Catalogo;
