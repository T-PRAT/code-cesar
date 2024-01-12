import Box from "../components/Box"
import { useState } from "react"

export default function Cesar() {
	const [text, setText] = useState('');
	const [encryptedText, setEncryptedText] = useState('');
	const [shift, setShift] = useState(0);

	const encryptText = (newText, newShift) => {
		setText(newText);

		let result = '';
		for (let i = 0; i < newText.length; i++) {
			let charCode = newText.charCodeAt(i);
			if (charCode >= 65 && charCode <= 90) {
				result += String.fromCharCode((charCode - 65 + newShift) % 26 + 65);
			} else if (charCode >= 97 && charCode <= 122) {
				result += String.fromCharCode((charCode - 97 + newShift) % 26 + 97);
			} else {
				result += newText[i];
			}
		}
		setEncryptedText(result);
	};

	const decryptText = (newEncryptedText, newShift) => {
		setEncryptedText(newEncryptedText);

		let result = '';
		for (let i = 0; i < newEncryptedText.length; i++) {
			let charCode = newEncryptedText.charCodeAt(i);
			if (charCode >= 65 && charCode <= 90) {
				result += String.fromCharCode((charCode - 65 - newShift + 26) % 26 + 65);
			} else if (charCode >= 97 && charCode <= 122) {
				result += String.fromCharCode((charCode - 97 - newShift + 26) % 26 + 97);
			} else {
				result += newEncryptedText[i];
			}
		}
		setText(result);
	};

	const controlShift = (e) => {
		if (e.target.value > 25) {
			setShift(25);
		} else if (e.target.value < 0) {
			setShift(0);
		} else {
			setShift(parseInt(e.target.value));
			encryptText(text, parseInt(e.target.value));
		}
	}

	return (
		<Box>
			<div className="flex space-x-12 justify-center w-full text-left">
				<div className="flex flex-col flex-grow space-y-1">
					<label className="text-text/70">Message en clair</label>
					<textarea className="p-4 bg-text rounded min-h-48 text-background-300" type="text" value={text} onChange={e => encryptText(e.target.value, shift)} />
				</div>
				<div className="flex flex-col space-y-1">
					<label className="text-text/70">Décalage</label>
					<input className="bg-text text-background-300 rounded p-2" type="number" min={0} max={25} value={shift} onChange={controlShift} />
				</div>
				<div className="flex flex-col flex-grow space-y-1">
					<label className="opacity-70">Message chiffré</label>
					<textarea className="p-4 bg-primary rounded min-h-48" type="text" value={encryptedText} onChange={e => decryptText(e.target.value, shift)}></textarea>
				</div>
			</div>
		</Box>
	)
}
