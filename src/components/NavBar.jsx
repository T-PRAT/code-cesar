import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav className='bg-background-200 min-w-48 max-w-60'>
			<Link to="/"><h1 className='text-3xl p-8 font-bold'>Code Cesar</h1></Link>
			<div className='space-y-6 m-8 flex'>
				<Link className='bg-background-100 rounded p-2 pl-6 w-full' to="/cesar">Cesar</Link>
			</div>
		</nav>
	)
}
