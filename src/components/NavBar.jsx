import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav className='bg-background-200 w-64'>
			<Link to="/"><h1 className='text-3xl p-8 font-bold'>Code Cesar</h1></Link>
			<div className='space-y-6 m-8 flex flex-col'>
				<NavLink className={({ isActive }) =>
					[
						isActive ? "border border-text bg-background-100 rounded p-2 pl-6 w-full" : "bg-background-100 rounded p-2 pl-6 w-full border border-background-100 hover:border-text/40",
					].join(" ")} to="/cesar">Cesar</NavLink>
				<NavLink className={({ isActive }) =>
					[
						isActive ? "border border-text bg-background-100 rounded p-2 pl-6 w-full" : "bg-background-100 rounded p-2 pl-6 w-full border border-background-100 hover:border-text/40",
					].join(" ")} to="/rsa">RSA simplifié</NavLink>
				<NavLink className={({ isActive }) =>
					[
						isActive ? "border border-text bg-background-100 rounded p-2 pl-6 w-full" : "bg-background-100 rounded p-2 pl-6 w-full border border-background-100 hover:border-text/40",
					].join(" ")} to="/substitution">Subtitution</NavLink>
			</div>
		</nav>
	)
}
