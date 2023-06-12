import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Select(props) {
	return (
		<Listbox value={props.font} onChange={props.setFont}>
			{({ open }) => (
				<>
					<Listbox.Label className="hidden">Font</Listbox.Label>
					<div className="relative mt-1">
						<Listbox.Button className="relative w-full cursor-pointer flex justify-center ">
							<span className={`ml-3 flex gap-x-4 text-gray_3 dark:text-white items-center font-` + props.font}>
								<div className="font-bold">{props.font}</div>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
									<path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
								</svg>
							</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"></span>
						</Listbox.Button>

						<Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
							<Listbox.Options className="absolute z-10 right-[-50px] top-10 mt-1 max-h-56 w-[183px] overflow-auto rounded-md bg-white dark:bg-gray_2 py-1 text-base shadow-[0px_3px_10px] ring-1 ring-black shadow-[rgba(0,0,0,0.1)] dark:shadow-purple ring-opacity-5 focus:outline-none sm:text-sm">
								<Listbox.Option value="Sans" className={({ active }) => classNames(active ? "text-purple" : "text-gray-900 dark:text-white", "p-3 pl-5 text-lg cursor-pointer font-bold")}>
									<span className="font-Sans">Sans</span>
								</Listbox.Option>
								<Listbox.Option value={"Serif"} className={({ active }) => classNames(active ? "text-purple" : "text-gray-900 dark:text-white", "p-3 pl-5 text-lg cursor-pointer font-bold")}>
									<span className="font-Serif">Serif</span>
								</Listbox.Option>
								<Listbox.Option value={"Monospace"} className={({ active }) => classNames(active ? "text-purple" : "text-gray-900 dark:text-white", "p-3 pl-5 text-lg cursor-pointer font-bold")}>
									<span className="font-Monospace">Monospace</span>
								</Listbox.Option>
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
