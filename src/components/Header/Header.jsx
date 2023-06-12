import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import Select from "../Select/Select";

export default function Header(props) {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const html = document.querySelector("html");
		const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (darkTheme) {
			html.classList.add("dark");
			setEnabled(true);
		}
	}, []);

	function changeTheme() {
		const html = document.querySelector("html");
		html.classList.toggle("dark");
		setEnabled(!enabled);
	}

	return (
		<header className="bg-white dark:bg-gray_1 ">
			<nav className="mx-auto flex w-[80vw] max-w-[736px] h-[102px] items-center justify-between" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
							<g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
								<path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
								<path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
								<path d="M11 9h12" />
							</g>
						</svg>
					</a>
				</div>
				<div className="flex gap-x-8 align-middle">
					<Select font={props.font} setFont={props.setFont} />
					<div className="h-[32px] w-[1px] bg-gray_7"></div>

					<div className="flex gap-x-4 items-center">
						<Switch checked={enabled} onChange={changeTheme} className={`${enabled ? "bg-purple" : "bg-gray_5"} relative inline-flex h-6 w-11 items-center rounded-full`}>
							<span className="sr-only">Enable notifications</span>
							<span className={`${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
						</Switch>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
							<path
								className="dark:stroke-purple"
								fill="none"
								stroke="#838383"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
							/>
						</svg>
					</div>
				</div>
			</nav>
		</header>
	);
}
