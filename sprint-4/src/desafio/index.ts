import { FilmeCategorias } from './enums/filme-categorias';
import { Netflix } from './netflix';
import { Usuario } from './types/usuario';
import { Filme } from './types/filme';

const lucas: Usuario = {
  nome: 'Lucas',
  email: 'lucas@gmail.com',
  senha: '123',
};

const tamires: Usuario = {
  nome: 'Tamires',
  email: 'tamires@gmail.com',
  senha: '456',
};

const mission: Filme = {
  nome: 'Mission',
  ano: 2022,
  categorias: [FilmeCategorias.acao, FilmeCategorias.aventura],
  codFilme: 1,
};

const missionTwo: Filme = {
  nome: 'MissionTwo',
  ano: 2022,
  categorias: [FilmeCategorias.drama, FilmeCategorias.comedia],
  codFilme: 2,
};

const netflix = new Netflix([lucas, tamires], [mission, missionTwo]);
