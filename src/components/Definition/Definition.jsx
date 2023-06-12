import { useEffect, useState } from "react";

const Definition = (props) => {
	const [word, setWord] = useState(props.data[0]);

	useEffect(() => {
		console.log(props.data);
		setWord(props.data[0]);
	}, [props.data]);

	function playAudio() {
		const audio = new Audio(word.phonetics[0].audio);
		audio.play();
	}

	return (
		<div className="text-gray_3 dark:text-white w-full max-w-[736px]">
			<div className="flex justify-between items-center w-full">
				<div>
					<h1 className="text-3xl font-bold">{word.word}</h1>
					<p className="text-purple text-2xl">{word.phonetic}</p>
				</div>
				{word.phonetics[0] && (
					<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" onClick={playAudio}>
						<g fill="#A445ED" fillRule="evenodd">
							<circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
							<path d="M29 27v21l21-10.5z" />
						</g>
					</svg>
				)}
			</div>
			<div className="mt-8">
				{word.meanings.map((meaning, index) => (
					<div key={index}>
						<div className="flex items-center gap-4 mt-8">
							<h2 className="text-xl font-bold italic">{meaning.partOfSpeech}</h2>
							<div className="bg-gray_7 dark:bg-gray_4 w-full h-[1px]"></div>
						</div>
						<div className="flex flex-col">
							<h3 className="text-xl text-gray_5 mt-8 mb-4">Meaning</h3>
							<div>
								{meaning.definitions.map((definition) => (
									<div className="flex my-4 gap-x-5">
										<div className="w-[5px] h-[5px] bg-darkPurple rounded-full relative top-[7px]"></div>
										<div className=" leading-[1.25rem] font-lg">{definition.definition}</div>
									</div>
								))}
							</div>
						</div>
						{meaning.synonyms.length > 0 && (
							<div className="flex gap-x-4 mt-4">
								<h3 className="text-xl text-gray_5 ">Synonyms</h3>
								<div className="flex flex-wrap gap-3">
									{meaning.synonyms.map((synonym) => (
										<p className="font-bold text-purple text-xl" onClick={() => props.getWord(undefined, synonym)}>
											{synonym}
										</p>
									))}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Definition;
