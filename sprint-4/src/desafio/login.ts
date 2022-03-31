import { Usuarios } from './database/usuarios';

export class Login {
  private email: string;
  private senha: string;

  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }

  entrar() {
    const usuario = new Usuarios()
      .listaUsuarios()
      .find((usuario) => usuario.email === this.email);

    if (usuario) {
      const verificarSenha = usuario.senha === this.senha;

      if (verificarSenha) {
        const dadosUsuario = usuario;
        const { senha, ...dadosUsuarioLimpo } = dadosUsuario;
        return dadosUsuarioLimpo;
      }
    }

    return console.error('usuario nao existe');
  }
}
