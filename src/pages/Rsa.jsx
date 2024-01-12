import Box from "../components/Box"
import { useState } from "react"

//simplified keygen(in a real-world scenario use amore secure method to generate this key)
const generateKey = () => {
	const PublicKey = Math.floor(Math.random() * 1000) + 1;
	return PublicKey;
}

export default function RSAEncryption() {
	const [inputText, setInputText] = useState('');
	const [publicKey, setPublicKey] = useState('');
	const [encryptedText, setEncryptedText] = useState('');

	const encryptText = () => {
		if (inputText === "") {
			alert("Veuillez entrer un message à chiffrer");
			return;
		}
		const newKey = generateKey();
		setPublicKey(newKey);
		//simplified rsa encryption
		// Map each character to its ASCII code multiplied by the public key
		const encrypted = inputText.split('').map(char => char.charCodeAt(0) * newKey);
		setEncryptedText(encrypted.join(','));
	}

	/* const decryptText = () => {
		//simplified rsa encryption
		generateKeys()
		// Map each character to its ASCII code multiplied by the public key
		const decrypted = inputText.split(',').map(char => char.charCodeAt(0) / publicKey);
		setDecryptedText(decrypted.join(','));
	} */

	const handleClick = () => {
		/*if (inputText === "" && decryptedText !== "") {
			// If input is empty and decryptedText is not, then decrypt
			if (publicKey) {
				decryptText();
			} else {
				alert("entrer une clé publique");
			}
		} else {*/
		// Otherwise, encrypt
		encryptText();
	}

	return (
		<Box>
			<div className="flex space-x-12 justify-center w-full text-left">
				<div className="flex flex-col flex-grow space-y-1">
					<label className="text-text/70">Message en clair</label>
					<textarea className="p-4 bg-text rounded min-h-48 text-background-300" type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
				</div>
				<button className="bg-accent hover:bg-accent/70 text-background-300 font-bold h-16 px-6 rounded-xl my-auto" onClick={handleClick}>Chiffrer</button>
				<div className="flex flex-col flex-grow space-y-1">
					<label className="opacity-70">Clé publique</label>
					<input className="p-4 bg-primary rounded min-h-12" type="text" value={publicKey} readOnly onChange={e => setPublicKey(e.target.value)}></input>
					<label className="opacity-70">Message chiffré</label>
					<textarea className="p-4 bg-primary rounded min-h-32" type="text" value={encryptedText} readOnly onChange={e => setDecryptedText(e.target.value)}></textarea>
				</div>
			</div>
		</Box >
	)
}
