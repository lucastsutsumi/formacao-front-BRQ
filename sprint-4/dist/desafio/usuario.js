"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, email, senha, assistidos, favoritos) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.assistidos = assistidos;
        this.favoritos = favoritos;
    }
    getDados() {
        return {
            "nome": this.nome,
            "email": this.email,
            "senha": this.senha,
            "assistidos": this.assistidos,
            "favoritos": this.favoritos,
        };
    }
}
exports.Usuario = Usuario;
