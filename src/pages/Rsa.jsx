import Box from "../components/Box"
import { useState } from "react"

//simplified keygen(in a real-world scenario use amore secure method to generate this key)
const generateKeyPair = () => {
	const privateKey = Math.floor(Math.random() * 1000) + 1;
	const publicKey = Math.floor(Math.random() * 1000) + 1;
	return { privateKey, publicKey };
}



export default function RSAEncryption() {
	const [inputText, setInputText] = useState('');

	const [publicKey, setPublicKey] = useState(null);
	const [privateKey, setPrivateKey] = useState(null);

	return (
		<>
			<Box>
				<input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
				<input type="number" value={shift} onChange={e => setShift(e.target.value)} />
				<button className="bg-primary text-background-300 font-bold px-6 py-4 rounded-xl" onClick={encryptText}>Chiffrer</button>
				<p>{encryptedText}</p>
			</Box>
		</>
	)
}
