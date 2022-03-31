import { Filme } from "./filme";

export type Usuario = {
  nome: string;
  email: string;
  senha: string;
  assistidos?: Filme[];
  favoritos?: Filme[];
};