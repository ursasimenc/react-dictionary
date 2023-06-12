const Error = (props) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<h2>{props.data.title}</h2>
			<p className="text-gray_5">{props.data.message}</p>
		</div>
	);
};

export default Error;
