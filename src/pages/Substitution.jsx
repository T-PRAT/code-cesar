import Box from "../components/Box"
import { useState } from "react"

const generateSubstitute = () => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
	return shuffledAlphabet;
}

export default function Substitution() {
	const [inputText, setInputText] = useState('');
	const [substitute, setSubstitute] = useState('');
	const [encryptedText, setEncryptedText] = useState('');

	const encryptText = () => {
		if (inputText === "") {
			alert("Veuillez entrer un message à chiffrer");
			return;
		}
		const newSubstitute = generateSubstitute();
		setSubstitute(newSubstitute);
		let result = '';

		for (let i = 0; i < inputText.length; i++) {
			let charCode = inputText[i].charCodeAt(0);
			if (charCode >= 97 && charCode <= 122) {
				result += newSubstitute[charCode - 97];
			}
			else if (charCode >= 65 && charCode <= 90) {
				result += newSubstitute[charCode - 65].toUpperCase();
			}
			else {
				result += inputText[i];
			}
		}
		setEncryptedText(result);
	}

	return (
		<Box>
			<div className="flex space-x-12 justify-center w-full text-left">
				<div className="flex flex-col flex-grow space-y-1">
					<label className="text-text/70">Message à chiffrer</label>
					<textarea className="p-4 bg-text rounded min-h-48 text-background-300" type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
				</div>
				<button className="bg-accent hover:bg-accent/70 text-background-300 font-bold h-16 px-6 rounded-xl my-auto" onClick={encryptText}>Chiffrer</button>
				<div className="flex flex-col flex-grow space-y-1">
					<label className="opacity-70">Substitut (abc[...]z)</label>
					<input className="p-4 bg-primary rounded min-h-12" readOnly type="text" value={substitute}></input>
					<label className="opacity-70">Message chiffré</label>
					<textarea className="p-4 bg-primary rounded min-h-32" type="text" readOnly value={encryptedText}></textarea>
				</div>
			</div>
		</Box >
	)
}

