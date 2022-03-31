"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const usuarios_1 = require("./database/usuarios");
class Login {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    entrar() {
        const usuario = new usuarios_1.Usuarios()
            .listaUsuarios()
            .find((usuario) => usuario.email === this.email);
        if (usuario) {
            const verificarSenha = usuario.senha === this.senha;
            if (verificarSenha) {
                const dadosUsuario = usuario;
                const { senha } = dadosUsuario, dadosUsuarioLimpo = __rest(dadosUsuario, ["senha"]);
                return dadosUsuarioLimpo;
            }
        }
        return console.error('usuario nao existe');
    }
}
exports.Login = Login;
