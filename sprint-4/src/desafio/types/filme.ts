import { FilmeCategorias } from '../enums/filme-categorias';

export type Filme = {
  nome: string;
  ano: number;
  categorias: FilmeCategorias[];
  codFilme: number;
  similares?: Filme[];
  fotoCapa?: string;
};
