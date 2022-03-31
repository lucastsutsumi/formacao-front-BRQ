"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filme_categorias_1 = require("./enums/filme-categorias");
const netflix_1 = require("./netflix");
const lucas = {
    nome: 'Lucas',
    email: 'lucas@gmail.com',
    senha: '123',
};
const tamires = {
    nome: 'Tamires',
    email: 'tamires@gmail.com',
    senha: '456',
};
const mission = {
    nome: 'Mission',
    ano: 2022,
    categorias: [filme_categorias_1.FilmeCategorias.acao, filme_categorias_1.FilmeCategorias.aventura],
    codFilme: 1,
};
const missionTwo = {
    nome: 'MissionTwo',
    ano: 2022,
    categorias: [filme_categorias_1.FilmeCategorias.drama, filme_categorias_1.FilmeCategorias.comedia],
    codFilme: 2,
};
const netflix = new netflix_1.Netflix([lucas, tamires], [mission, missionTwo]);
