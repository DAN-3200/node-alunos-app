import { atom } from 'jotai';

export const ctxFilter = {
	Nome: atom(),
	Media: atom(),
	Faltas: atom(),
	Aprovados: atom(),
	Reprovados: atom(),
};

export const ctxMain = {
	listAlunos: atom(),
};
