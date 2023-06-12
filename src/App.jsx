import Header from "./components/Header/Header";
import Definition from "./components/Definition/Definition";
import { useEffect, useState } from "react";

function App() {
	// const mouse = [
	// 	{
	// 		word: "mouse",
	// 		phonetics: [],
	// 		meanings: [
	// 			{
	// 				partOfSpeech: "noun",
	// 				definitions: [
	// 					{
	// 						definition: "Any small rodent of the genus Mus.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A member of the many small rodent and marsupial species resembling such a rodent.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A quiet or shy person.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "(plural mice or, rarely, mouses) An input device that is moved over a pad or other flat surface to produce a corresponding movement of a pointer on a graphical display.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "Hematoma.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A turn or lashing of spun yarn or small stuff, or a metallic clasp or fastening, uniting the point and shank of a hook to prevent its unhooking or straightening out.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A familiar term of endearment.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A match used in firing guns or blasting.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A small model of (a fragment of) Zermelo-Fraenkel set theory with desirable properties (depending on the context).",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "A small cushion for a woman's hair.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 				],
	// 				synonyms: [],
	// 				antonyms: [],
	// 			},
	// 			{
	// 				partOfSpeech: "verb",
	// 				definitions: [
	// 					{
	// 						definition: "To move cautiously or furtively, in the manner of a mouse (the rodent) (frequently used in the phrasal verb to mouse around).",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "To hunt or catch mice (the rodents), usually of cats.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "To close the mouth of a hook by a careful binding of marline or wire.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 						example: "Captain Higgins moused the hook with a bit of marline to prevent the block beckets from falling out under slack.",
	// 					},
	// 					{
	// 						definition: "To navigate by means of a computer mouse.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 					{
	// 						definition: "To tear, as a cat devours a mouse.",
	// 						synonyms: [],
	// 						antonyms: [],
	// 					},
	// 				],
	// 				synonyms: [],
	// 				antonyms: [],
	// 			},
	// 		],
	// 		license: {
	// 			name: "CC BY-SA 3.0",
	// 			url: "https://creativecommons.org/licenses/by-sa/3.0",
	// 		},
	// 		sourceUrls: ["https://en.wiktionary.org/wiki/mouse"],
	// 	},
	// ];
	const [font, setFont] = useState("Sans");
	const [data, setData] = useState();

	useEffect(() => {
		const html = document.querySelector("html");
		const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (darkTheme) {
			html.classList.add("dark");
		}
	}, []);

	async function getWord(e) {
		const key = e;
		if (key !== "Enter") return;

		const word = document.getElementById("search").value;
		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

		const response = await fetch(url);
		const data = await response.json();
		setData(data);
	}

	return (
		<>
			<Header font={font} setFont={setFont} />
			<main className={"bg-white dark:bg-gray_1 flex flex-col items-center gap-14 font-" + font}>
				<div className="w-full max-w-[736px]">
					<label htmlFor="price" className="sr-only">
						search
					</label>
					<div className="relative mt-2 rounded-md">
						<input
							type="text"
							name="search"
							id="search"
							className="w-full sm: h-[64px] px-6 rounded-sm border-0 bg-gray_9 dark:bg-gray_2 font-bold text-gray_3 dark:text-white  placeholder:text-gray_5 placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-purple "
							placeholder="Search for any word"
							onKeyDown={(e) => getWord(e.key)}
						/>
						<div className="cursor-pointer absolute inset-y-0 right-6 flex items-center pl-3" onClick={() => getWord("Enter")}>
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
								<path
									fill="none"
									stroke="#A445ED"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
								/>
							</svg>
						</div>
					</div>
				</div>
				{data && <Definition data={data} />}
			</main>
		</>
	);
}

export default App;
