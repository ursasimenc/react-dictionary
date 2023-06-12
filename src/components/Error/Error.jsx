const Error = (props) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<h1>{props.data.title}</h1>
			<p className="text-gray_5">{props.data.message}</p>
		</div>
	);
};

export default Error;
