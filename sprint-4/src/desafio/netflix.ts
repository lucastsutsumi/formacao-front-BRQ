import { Catalogo } from './database/catalogo';
import { Usuarios } from './database/usuarios';
import { Filme } from './types/filme';
import { Login } from './login';
import { Usuario } from './types/usuario';

export class Netflix {
  private usuarios: Usuarios;
  private catalogo: Catalogo;

  constructor(usuarios: Usuario[], filmes: Filme[]) {
    this.usuarios = new Usuarios(usuarios);
    this.catalogo = new Catalogo(filmes);
  }

  entrar(email: string, senha: string) {
    return new Login(email, senha).entrar();
  }

  adicionarUsuario(usuario: Usuario) {
    return this.usuarios.adicionar(usuario);
  }

  atualizarUsuario(email: string, usuario: Partial<Usuario>) {
    return this.usuarios.atualizar(email, usuario);
  }

  removerUsuario(email: string) {
    return this.usuarios.remover(email);
  }

  listarUsuarios() {
    return this.usuarios.listaUsuarios();
  }

  adicionarFilme(filme: Filme) {
    return this.catalogo.adicionar(filme);
  }

  removerFilme(codFilme: number) {
    return this.catalogo.remover(codFilme);
  }

  atualizarFilme(codFilme: number, filme: Partial<Filme>) {
    return this.catalogo.atualizar(codFilme, filme);
  }

  listarCatalogo() {
    return this.catalogo.listaFilmes();
  }
}
