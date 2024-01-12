
import Box from "../components/Box"
import { useState } from "react"

export default function Cesar() {
	const [inputText, setInputText] = useState('');
	const [shift, setShift] = useState(0);
	const [encryptedText, setEncryptedText] = useState('');

	const encryptText = () => {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let charCode = inputText.charCodeAt(i);
			if (charCode >= 65 && charCode <= 90) {
				if ((charCode + shift) > 90) {
					result += String.fromCharCode(65 + (charCode + shift) - 91);
				} else {
					result += String.fromCharCode(charCode + shift);
				}
			} else if (charCode >= 97 && charCode <= 122) {
				if ((charCode + shift) > 122) {
					result += String.fromCharCode(97 + (charCode + shift) - 123);
				} else {
					result += String.fromCharCode(charCode + shift);
				}
			} else {
				result += inputText[i];
			}
		}
		setEncryptedText(result);
	};

	const controlShift = (e) => {
		if (e.target.value > 25) {
			setShift(25);
		} else if (e.target.value < 0) {
			setShift(0);
		} else {
			setShift(parseInt(e.target.value));
		}
	}

	return (
		<Box>
			<div className="mb-12 text-background-300 flex flex-col">
				<label className="text-text/70 pt-4">Message à chiffrer</label>
				<textarea className="bg-text rounded p-2 min-h-24" type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
				<label className="text-text/70 pt-4">Décalage</label>
				<input className="bg-text rounded p-2 w-1/3" type="number" min={0} max={25} value={shift} onChange={controlShift} />
			</div>
			<button className="bg-accent text-background-300 font-bold text-xl  p-4 rounded-xl w-1/2 mx-auto" onClick={encryptText}>Chiffrer</button>
			<div className="pt-6">
				<p className="opacity-70">Résultat:</p>
				<textarea className="text-xl p-4 bg-primary rounded border-2 border-background-300 w-full min-h-32" type="text" value={encryptedText}></textarea>
			</div>
		</Box>
	)
}
