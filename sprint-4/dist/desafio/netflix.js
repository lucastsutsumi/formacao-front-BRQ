"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Netflix = void 0;
const catalogo_1 = require("./database/catalogo");
const usuarios_1 = require("./database/usuarios");
const login_1 = require("./login");
class Netflix {
    constructor(usuarios, filmes) {
        this.usuarios = new usuarios_1.Usuarios(usuarios);
        this.catalogo = new catalogo_1.Catalogo(filmes);
    }
    entrar(email, senha) {
        return new login_1.Login(email, senha).entrar();
    }
    adicionarUsuario(usuario) {
        return this.usuarios.adicionar(usuario);
    }
    atualizarUsuario(email, usuario) {
        return this.usuarios.atualizar(email, usuario);
    }
    removerUsuario(email) {
        return this.usuarios.remover(email);
    }
    listarUsuarios() {
        return this.usuarios.listaUsuarios();
    }
    adicionarFilme(filme) {
        return this.catalogo.adicionar(filme);
    }
    removerFilme(codFilme) {
        return this.catalogo.remover(codFilme);
    }
    atualizarFilme(codFilme, filme) {
        return this.catalogo.atualizar(codFilme, filme);
    }
    listarCatalogo() {
        return this.catalogo.listaFilmes();
    }
}
exports.Netflix = Netflix;
