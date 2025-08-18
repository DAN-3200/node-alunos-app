import { atom } from 'jotai';
import type { iAlunos } from './domain';
import data from '../../public/alunos.json';

export const ctxMain = {
	listAlunos: atom<iAlunos[]>(data as iAlunos[]),
};

export const ctxFilter = {
	nome: atom(''),
	media: atom<number | any>(),
	faltas: atom<number | any>(),
	isAproved: atom<boolean | null>(),
};
