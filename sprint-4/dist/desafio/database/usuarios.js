"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const LISTA_USUARIOS = [];
class Usuarios {
    constructor(usuarios) {
        if (usuarios) {
            LISTA_USUARIOS.push(...usuarios);
        }
    }
    adicionar(usuario) {
        LISTA_USUARIOS.push(usuario);
    }
    remover(email) {
        const usuario = this.encontrarUsuario(email);
        if (!usuario) {
            return console.error('Usuario nao existe');
        }
        const index = LISTA_USUARIOS.indexOf(usuario);
        LISTA_USUARIOS.splice(index, 1);
    }
    atualizar(email, usuario) {
        const usuarioAntigo = this.encontrarUsuario(email);
        if (!usuarioAntigo) {
            return console.error('Usuario nao existe');
        }
        const index = LISTA_USUARIOS.indexOf(usuarioAntigo);
        let novoUsuario = Object.assign(Object.assign({}, usuarioAntigo), usuario);
        LISTA_USUARIOS.splice(index, 1, novoUsuario);
        return novoUsuario;
    }
    listaUsuarios() {
        return [...LISTA_USUARIOS];
    }
    encontrarUsuario(email) {
        return LISTA_USUARIOS.filter((usuario) => usuario.email === email).pop();
    }
}
exports.Usuarios = Usuarios;
