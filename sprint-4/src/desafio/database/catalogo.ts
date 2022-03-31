import { Filme } from '../types/filme';

const CATALOGO: Filme[] = [];

export class Catalogo {
  constructor(catalogo: Filme[]) {
    CATALOGO.push(...catalogo);
  }

  adicionar(filme: Filme) {
    CATALOGO.push(filme);
  }

  remover(codFilme: number) {
    const filme = this.encontrarFilme(codFilme);

    if (!filme) {
      return console.error('filme nao existe no catalogo');
    }

    const index = CATALOGO.indexOf(filme);
    CATALOGO.splice(index, 1);
  }

  atualizar(codFilme: number, filme: Partial<Filme>) {
    const filmeAntigo = this.encontrarFilme(codFilme);
    if (!filmeAntigo) {
      return console.error('Filme nao existe');
    }

    const index = CATALOGO.indexOf(filmeAntigo);
    let novoFilme = { ...filmeAntigo, ...filme };
    CATALOGO.splice(index, 1, novoFilme);

    return novoFilme;
  }

  listaFilmes() {
    return [...CATALOGO];
  }

  private encontrarFilme(codFilme: number) {
    return CATALOGO.filter((filme) => filme.codFilme === codFilme).pop();
  }
}
