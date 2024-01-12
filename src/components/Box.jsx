import { useLocation } from 'react-router-dom';

export default function Box({ children }) {
	const location = useLocation();
	return (
		<div className='max-w-[600px] p-12 mx-auto'>
			<h2 className='text-4xl p-12 bg-background-200 rounded text-center'>{location.pathname?.charAt(1).toUpperCase() + location.pathname?.slice(2)}</h2>
			<hr className='text-primary/50' />
			<div className='bg-background-200 p-12 rounded'>
				<div className="flex flex-col space-y-2 justify-center">
					{children}
				</div>
			</div>
		</div>
	)
}
