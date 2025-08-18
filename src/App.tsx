import { TabFilter } from './parts/FilterView';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TableFixed } from './parts/TableView';

export default function App() {
	document.getElementsByTagName('title')[0].innerText = 'App UnMEP';
	const [isVisible, setVisible] = useState(true);
	let durationAnimation = 1600;

	useEffect(() => {
		setTimeout(() => setVisible(false), durationAnimation);
	}, []);

	return (
		<div className='h-screen w-screen bg-[#EDEADE] flex justify-center items-center p-2'>
			<AnimatePresence>
				{isVisible ? (
					<div className='flex flex-col gap-4 items-center'>
						<motion.img
							initial={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							animate={{ rotate: [0, -10, 10, -10, 0] }}
							transition={{
								duration: durationAnimation / 1000,
								repeat: Infinity,
								ease: 'easeInOut',
								repeatType: 'loop',
							}}
							style={{ transformOrigin: 'bottom center' }}
							src='https://loja-unmep.s3.amazonaws.com/static/images/logo-unmep-nova.png'
							alt=''
							className='size-40'
							draggable='false'
						/>
						<span className='font-montserrat font-bold text-[32px] text-[#00034F]/70 cursor-default'>
							<span className='text-blue-400'>Un</span>MEP
						</span>
					</div>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='flex flex-col items-center justify-center gap-4'>
						<TabFilter />
						<TableFixed/>
						{/* <BoxList /> */}
						<small className='text-stone-400 cursor-pointer not-hover:opacity-50 font-semibold transition-all'>
							@ Mini App produzido por Daniel Moreira. Agosto de 2025
						</small>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
