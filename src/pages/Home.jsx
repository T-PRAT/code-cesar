import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className='p-12 mx-auto max-w-screen-lg'>
			<div className='bg-background-200 rounded text-center p-12'>
				<h2 className='text-3xl p-12 '>Chiffrer vos messages avec <br /> différentes méthodes de chiffrements </h2>
				<hr className='text-primary/50' />
				<div className='p-12 rounded text-left mx-auto'>
					<ul>
						<li className='text-2xl p-2 space-y-2'>
							<Link to="/cesar">Cesar</Link>
							<p className='text-lg opacity-80'>
								Le chiffrement de César est une méthode de chiffrement très simple utilisée par Jules César dans ses correspondances secrètes (ce qui explique le nom « chiffre de César »). Le chiffre de César est un décalage de l'alphabet de quelques lettres.
							</p>
						</li>
						<li className='text-2xl p-2 space-y-2'>
							<Link to="/rsa">RSA simplifié</Link>
							<p className='text-lg opacity-80'>
								Le chiffrement RSA est un algorithme de cryptographie asymétrique (cryptosystème à clé publique) très utilisé dans le commerce électronique, et plus généralement pour échanger des données confidentielles sur Internet.
							</p>
						</li>
						<li className='text-2xl p-2 space-y-2'>
							<Link to="/substitution">Subtitution</Link>
							<p className='text-lg opacity-80'>
								Le chiffrement par substitution est une méthode de chiffrement par laquelle chaque lettre du texte à chiffrer est remplacée par une autre lettre, symbole ou nombre.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
