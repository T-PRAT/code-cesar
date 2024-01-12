import { useLocation } from 'react-router-dom';

export default function Box({ children }) {
	const location = useLocation();
	return (
		<div className='p-12 mx-auto'>
			<div className='bg-background-200 rounded text-center p-12'>
				<h2 className='text-4xl p-12 '>{location.pathname?.charAt(1).toUpperCase() + location.pathname?.slice(2)}</h2>
				<hr className='text-primary/50' />
				<div className='p-12 rounded'>
					{children}
				</div>
			</div>
		</div>
	)
}
