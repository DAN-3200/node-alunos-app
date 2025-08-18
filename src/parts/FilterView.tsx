import { ctxFilter } from '../shared/context';
import { useAtom } from 'jotai';
import clsx from 'clsx';

export function TabFilter() {
	const [nome, setNome] = useAtom(ctxFilter.nome);
	const [media, setMedia] = useAtom(ctxFilter.media);
	const [faltas, setFaltas] = useAtom(ctxFilter.faltas);
	const [value, setValue] = useAtom(ctxFilter.isAproved);

	const Interruptor = (e: boolean | null) => {
		if (e != value) {
			setValue(e);
			return;
		}
		setValue(null);
	};

	return (
		<div className='p-2 w-max bg-white rounded flex gap-2 shadow-md'>
			<button
				onClick={() => Interruptor(true)}
				className={clsx(
					'border-2 rounded h-8 w-max px-2 text-xs font-semibold cursor-pointer border-green-800/40 text-green-800/50',
					value == true && 'border-transparent bg-green-800 text-white'
				)}>
				Alunos Aprovados
			</button>
			<button
				onClick={() => Interruptor(false)}
				className={clsx(
					'border-2 rounded h-8 w-max px-2 text-xs font-semibold cursor-pointer border-red-800/40 text-red-800/50',
					value == false && 'border-transparent bg-red-800 text-white'
				)}>
				Alunos Reprovados
			</button>
			<input
				type='text'
				name=''
				id=''
				value={nome}
				className='bg-stone-100 px-2 outline-none focus:bg-stone-200 transition-colors rounded text-sm'
				placeholder='Nome do Aluno'
				onChange={(e) => setNome(e.target.value)}
			/>
			<input
				type='number'
				name=''
				id=''
				className='bg-stone-100 px-2 w-40 outline-none focus:bg-stone-200 transition-colors rounded text-sm'
				placeholder='Média das Notas'
				value={media! && media != 0 ? media : ''}
				onChange={(e) => setMedia(e.target.value)}
			/>
			<input
				type='number'
				name=''
				id=''
				className='bg-stone-100 w-30 px-2 outline-none focus:bg-stone-200 transition-colors rounded text-sm'
				placeholder='N° Faltas'
				value={faltas!}
				onChange={(e) => setFaltas(e.target.value)}
			/>
		</div>
	);
}
