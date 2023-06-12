import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Definition = (props) => {
	const [word, setWord] = useState(props.data[0]);
	const [amount, setAmount] = useState(props.data.length);
	const [shown, setShown] = useState(1);

	useEffect(() => {
		console.log(props.data);
		setAmount(props.data.length);
		setWord(props.data[0]);
	}, [props.data]);

	function playAudio() {
		const audio = new Audio(word.phonetics[0].audio);
		audio.play();
	}

	function changeWord(change) {
		if (change === "next") {
			setShown(shown + 1);
			setWord(props.data[shown]);
		} else if (change === "prev") {
			setShown(shown - 1);
			setWord(props.data[shown - 2]);
		}
	}

	return (
		<div className="text-gray_3 dark:text-white w-[80vw] max-w-[736px]">
			<div className="w-full flex flex-col">
				<div className="flex justify-between items-center">
					<span className="text-3xl font-bold">{word.word}</span>
					{amount > 1 && (
						<div className="flex gap-2">
							<button className="button" onClick={() => changeWord("prev")} title="Show previous word" disabled={shown === 1}>
								<ChevronLeftIcon className="h-5 w-5" />
							</button>
							<button className="button" onClick={() => changeWord("next")} title="Show next word" disabled={shown === amount}>
								<ChevronRightIcon className="h-5 w-5" />
							</button>
						</div>
					)}
				</div>
				<div className="text-purple text-2xl flex items-center justify-between ">
					<span>{word.phonetic}</span>
					{word.phonetics[0] && (
						<svg className="cursor-pointer mt-2" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" onClick={playAudio}>
							<g fill="#A445ED" fillRule="evenodd">
								<circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
								<path d="M29 27v21l21-10.5z" />
							</g>
						</svg>
					)}
				</div>
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
								{meaning.definitions.map((definition, index) => (
									<div className="flex my-4 gap-x-2" key={index}>
										<div className="flex items-start">
											<div className="w-[5px] h-[5px] rounded-full bg-darkPurple relative top-[8.5px]"></div>
										</div>
										<div className=" leading-[1.25rem] font-lg">
											<span>{definition.definition}</span>

											{definition.example && <span className="text-gray_5 block mt-2">"{definition.example}"</span>}
										</div>
									</div>
								))}
							</div>
						</div>
						{meaning.synonyms.length > 0 && (
							<div className="flex gap-x-4 mt-4">
								<h3 className="text-xl text-gray_5 ">Synonyms</h3>
								<div className="flex flex-wrap gap-3">
									{meaning.synonyms.map((synonym) => (
										<p className="font-bold text-purple text-xl" key={synonym}>
											{synonym}
										</p>
									))}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
			<div className="bg-gray_7 dark:bg-gray_4 w-full h-[1px] mt-10 mb-5"></div>
			<div className="flex gap-4 text-base">
				<h6 className="text-gray_5">Source</h6>
				<a href={word.sourceUrls[0]} target="_blank" className="flex items-center gap-2">
					{word.sourceUrls[0]}
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
						<path
							fill="none"
							stroke="#838383"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Definition;
