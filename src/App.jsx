import Header from "./components/Header/Header";
import { useState, lazy, Suspense } from "react";

function App() {
	const [font, setFont] = useState("Sans");
	const [data, setData] = useState();
	const [res, setRes] = useState(null);
	const [error, setError] = useState(false);

	const Definition = lazy(() => import("./components/Definition/Definition"));
	const Error = lazy(() => import("./components/Error/Error"));

	async function getWord(e) {
		const key = e;
		if (key !== "Enter") return;

		const search = document.getElementById("search");
		const word = search.value;

		if (word.length === 0) {
			// search.setAttribute("invalid", "true");
			setError(true);
			setData(null);
			setRes(null);
			return;
		}

		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		const response = await fetch(url);
		const data = await response.json();

		setError(false);
		if (data.title !== undefined) {
			setData(data);
			setRes(false);
		} else {
			setData(data);
			setRes(true);
		}
	}

	return (
		<>
			<Header font={font} setFont={setFont} />
			<main className={"bg-white dark:bg-gray_1 mb-8 flex flex-col items-center gap-14 selection:bg-darkPurple text-gray_3 dark:text-white font-" + font}>
				<div className=" w-[80vw] max-w-[736px]">
					<label htmlFor="price" className="sr-only">
						search
					</label>
					<div className="relative mt-2 rounded-md">
						<input
							type="text"
							name="search"
							id="search"
							className={
								`w-full sm: h-[64px] px-6 rounded-2xl border-0 bg-gray_9 dark:bg-gray_2 font-bold text-gray_3 dark:text-white placeholder:text-gray_5 placeholder:font-normal  ` +
								(error ? "ring-2 ring-red focus:ring-red" : "focus:ring-2 focus:ring-inset focus:ring-purple")
							}
							required
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
					{error && <span className="text-red block mt-4">Whoops, can’t be empty…</span>}
				</div>
				<Suspense fallback={<div className="w-[80vw] max-w-[736px] h-[80vh] flex items-center justify-center">Loading...</div>}>
					{res && data && <Definition data={data} />}
					{!res && data && <Error data={data} />}
				</Suspense>
			</main>
		</>
	);
}

export default App;
