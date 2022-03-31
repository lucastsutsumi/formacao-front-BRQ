import { Usuario } from '../types/usuario';

const LISTA_USUARIOS: Usuario[] = [];

export class Usuarios {
  constructor(usuarios?: Usuario[]) {
    if (usuarios) {
      LISTA_USUARIOS.push(...usuarios);
    }
  }

  adicionar(usuario: Usuario) {
    LISTA_USUARIOS.push(usuario);
  }

  remover(email: string) {
    const usuario = this.encontrarUsuario(email);
    if (!usuario) {
      return console.error('Usuario nao existe');
    }

    const index = LISTA_USUARIOS.indexOf(usuario);
    LISTA_USUARIOS.splice(index, 1);
  }

  atualizar(email: string, usuario: Partial<Usuario>) {
    const usuarioAntigo = this.encontrarUsuario(email);
    if (!usuarioAntigo) {
      return console.error('Usuario nao existe');
    }

    const index = LISTA_USUARIOS.indexOf(usuarioAntigo);
    let novoUsuario = { ...usuarioAntigo, ...usuario };
    LISTA_USUARIOS.splice(index, 1, novoUsuario);

    return novoUsuario;
  }

  listaUsuarios() {
    return [...LISTA_USUARIOS];
  }

  private encontrarUsuario(email: string) {
    return LISTA_USUARIOS.filter((usuario) => usuario.email === email).pop();
  }
}
