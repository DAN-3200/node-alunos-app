export interface iAlunos {
   id: number;
   primeiro_nome: string;
   ultimo_nome: string;
   nota_1: number;
   nota_2: number;
   nota_3: number;
   nota_4: number;
   faltas: number;
}

export const calcularMedia = (
	n1: number,
	n2: number,
	n3: number,
	n4: number
): number => (n1 + n2 + n3 + n4) / 4;
