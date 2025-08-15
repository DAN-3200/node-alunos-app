import { useAtom } from 'jotai';
import data from '../public/alunos.json';
import { ctxMain } from './context';

export default function App() {
	const [, setList] = useAtom(ctxMain.listAlunos);
	try {
		setList(data);
	} catch (e) {
		console.log(e);
		setList([]);
	}

	return (
		<div className='h-screen w-screen bg-[#EDEADE] flex flex-col justify-center gap-2 items-center p-2'>
			<TabFilter />
			<BoxList />
		</div>
	);
}

function TabFilter() {
	// *vai filtrar a lista aqui

	return (
		<div className='p-2 w-160 bg-emerald-600 rounded flex-col flex gap-2'>
			<input
				type='text'
				name=''
				id=''
				className='bg-white'
				placeholder='Nome'
			/>
			<input
				type='text'
				name=''
				id=''
				className='bg-white'
				placeholder='Media das Notas'
			/>
			<input
				type='text'
				name=''
				id=''
				className='bg-white'
				placeholder='Quantidades de Faltas'
			/>
			<button className='bg-yellow-400 rounded h-10 w-max p-2 text-sm'>
				Alunos Aprovados
			</button>
			<button className='bg-yellow-400 rounded h-10 w-max p-2 text-sm'>
				Alunos Reprovados
			</button>
		</div>
	);
}

interface iAlunos {
	id: number;
	primeiro_nome: string;
	ultimo_nome: string;
	nota_1: number;
	nota_2: number;
	nota_3: number;
	nota_4: number;
	faltas: number;
}

function BoxList() {
	// *só renderizar a lista já filtrada

	const Line = ({ info }: { info: iAlunos }) => {
		const media = calcularMedia(
			info.nota_1,
			info.nota_2,
			info.nota_3,
			info.nota_4
		);
		return (
			<tr className='text-sm h-5'>
				<td>{info.id}</td>
				<td>{`${info.primeiro_nome} ${info.ultimo_nome}`}</td>
				<td>{info.nota_1 || 0}</td>
				<td>{info.nota_2 || 0}</td>
				<td>{info.nota_3 || 0}</td>
				<td>{info.nota_4 || 0}</td>
				<td>{media.toFixed(1)}</td>
				<td>{info.faltas}</td>
				<td>{media >= 7 && info.faltas < 7 ? 'Aprovado' : 'Reprovado'}</td>
			</tr>
		);
	};

	return (
		<div className='w-160 h-80 rounded bg-white p-2'>
			<table
				className='bg-blue-200'
				cellPadding={2}
				width='100%'>
				<tr className='text-sm h-10 bg-red-400'>
					<th>Id</th>
					<th>Nome</th>
					<th>Nota 1</th>
					<th>Nota 2</th>
					<th>Nota 3</th>
					<th>Nota 4</th>
					<th>Media Final</th>
					<th>Faltas</th>
					<th>Status</th>
				</tr>
				{(data as iAlunos[]).map((item: iAlunos) => (
					<Line info={item} />
				))}
			</table>
		</div>
	);
}

function calcularMedia(n1: number, n2: number, n3: number, n4: number): number {
	return (n1 + n2 + n3 + n4) / 4;
}
