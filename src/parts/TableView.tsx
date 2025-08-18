import clsx from 'clsx';
import { calcularMedia, type iAlunos } from '../shared/domain';
import { atom, useAtom, useAtomValue } from 'jotai';
import { ctxFilter, ctxMain } from '../shared/context';
import { memo, useMemo } from 'react';
import * as luc from 'lucide-react';

const vSort = atom({ key: '', bool: true });

export function TableFixed() {
	const list = useAtomValue(ctxMain.listAlunos);
	const nome = useAtomValue(ctxFilter.nome);
	const media = useAtomValue(ctxFilter.media);
	const faltas = useAtomValue(ctxFilter.faltas);
	const isAproved = useAtomValue(ctxFilter.isAproved);
	const [pivotSort] = useAtom(vSort);

	const FinalLista = useMemo(() => {
		let BaseList =
			isAproved != null
				? list.filter((item) => {
						let media = calcularMedia(
							item.nota_1,
							item.nota_2,
							item.nota_3,
							item.nota_4
						);
						return isAproved
							? media >= 7 && item.faltas < 7
							: media < 7 || item.faltas > 7;
				  })
				: list;

		let FiltredList = BaseList.filter((item) => {
			let FilterNome = (item.primeiro_nome + ' ' + item.ultimo_nome)
				.toLowerCase()
				.includes(nome.toLowerCase());

			let filterMedia =
				media === undefined || media == ''
					? true
					: calcularMedia(item.nota_1, item.nota_2, item.nota_3, item.nota_4) >=
					  media!;

			let filterFaltas =
				faltas === undefined || faltas == '' ? true : item.faltas <= faltas!;

			return FilterNome && filterMedia && filterFaltas;
		});

		let SortedList = [...FiltredList].sort((a, b) => {
			const sentido = pivotSort.bool ? 1 : -1;

			if (pivotSort.key == 'nome') {
				return (
					String(`${a.primeiro_nome} ${a.ultimo_nome}`).localeCompare(
						`${b.primeiro_nome} ${b.ultimo_nome}`
					) * sentido
				);
			}

			if (pivotSort.key == 'media') {
				return (
					(calcularMedia(a.nota_1, a.nota_2, a.nota_3, a.nota_4) -
						calcularMedia(b.nota_1, b.nota_2, b.nota_3, b.nota_4)) *
					sentido
				);
			}

			const valA = a[pivotSort.key] != null ? a[pivotSort.key] : 0;
			const valB = b[pivotSort.key] != null ? b[pivotSort.key] : 0;

			if (typeof valA == 'number' && typeof valB == 'number') {
				return (valA - valB) * sentido;
			}
			return String(valA).localeCompare(String(valB)) * sentido;
		});

		return SortedList;
	}, [nome, media, faltas, isAproved, pivotSort]);

	return (
		<div className='h-110 w-240 rounded bg-white p-2 shadow-md overflow-hidden flex flex-col gap-1'>
			<HeaderRow />
			<div className='h-full flex-col gap-1 overflow-auto scroll-hidden rounded-xs bg-stone-100/50 border border-black/10'>
				{FinalLista.length > 0 ? (
					FinalLista.map((item) => (
						<DataRow
							key={item.id}
							info={item}
						/>
					))
				) : (
					<div className='flex flex-col items-center mt-30'>
						<luc.Search className='w-12 h-12 text-gray-300 mb-4' />
						<p className='text-lg font-medium'>Nenhum resultado encontrado</p>
						<p className='text-sm'>Tente ajustar sua pesquisa</p>
					</div>
				)}
			</div>
		</div>
	);
}

const HeaderRow = () => {
	const [sort, setSort] = useAtom(vSort);
	const handleSort = (key: string) =>
		setSort((prev) => ({ ...prev, key: key, bool: !prev.bool }));

	const Bloc = ({
		text,
		field = '',
		onClick,
	}: {
		text: string;
		field?: string;
		onClick?: () => void;
	}) => (
		<div
			onClick={onClick}
			className={clsx(
				'px-3 py-1.5 cursor-pointer hover:bg-stone-200 focus:bg-stone-300 transition-colors w-full',
				sort.key == field && (sort.bool ? 'bg-transparent' : 'bg-stone-200/60')
			)}>
			<div className='flex items-center gap-1 justify-center text-stone-800 over'>
				{text}
			</div>
		</div>
	);

	return (
		<div className='grid grid-cols-[60px_1fr_80px_80px_80px_80px_100px_80px_100px] grid-rows-1 w-full bg-stone-100 divide-x-2 divide-black/20 border border-black/10 rounded-xs font-semibold text-stone-700 text-sm'>
			<Bloc
				text='Id'
				field='id'
				onClick={() => handleSort('id')}
			/>
			<Bloc
				text='Nome'
				field='nome'
				onClick={() => handleSort('nome')}
			/>
			<Bloc
				text='Nota 1'
				field='nota_1'
				onClick={() => handleSort('nota_1')}
			/>
			<Bloc
				text='Nota 2'
				field='nota_2'
				onClick={() => handleSort('nota_2')}
			/>
			<Bloc
				text='Nota 3'
				field='nota_3'
				onClick={() => handleSort('nota_3')}
			/>
			<Bloc
				text='Nota 4'
				field='nota_4'
				onClick={() => handleSort('nota_4')}
			/>
			<Bloc
				text='Media'
				field='media'
				onClick={() => handleSort('media')}
			/>
			<Bloc
				text='Faltas'
				field='faltas'
				onClick={() => handleSort('faltas')}
			/>
			<Bloc text='Status' />
		</div>
	);
};

const DataRow = memo(({ info: v }: { info: iAlunos }) => {
	const Bloc = ({ text, className }: { text: any; className?: string }) => (
		<div className='px-3 py-1 cursor-pointer transition-colors w-full'>
			<div
				className={clsx('flex items-center gap-1 justify-center', className)}>
				{text}
			</div>
		</div>
	);

	const media = calcularMedia(v.nota_1, v.nota_2, v.nota_3, v.nota_4);

	return (
		<div className='grid grid-cols-[60px_1fr_80px_80px_80px_80px_100px_80px_100px] grid-rows-1 divide-x-2 divide-black/20 hover:bg-stone-200/70 text-sm'>
			<Bloc text={v.id} />
			<Bloc text={v.primeiro_nome + ' ' + v.ultimo_nome} />
			<Bloc text={v.nota_1 || 0} />
			<Bloc text={v.nota_2 || 0} />
			<Bloc text={v.nota_3 || 0} />
			<Bloc text={v.nota_4 || 0} />
			<Bloc
				className={media >= 7 ? 'text-green-700' : 'text-red-700'}
				text={media.toPrecision(2)}
			/>
			<Bloc
				className={v.faltas >= 7 && 'text-red-700'}
				text={v.faltas}
			/>
			<Bloc
				className={
					media >= 7 && v.faltas < 7 ? 'text-green-700' : 'text-red-700'
				}
				text={media >= 7 && v.faltas < 7 ? 'Aprovado' : 'Reprovado'}
			/>
		</div>
	);
});
