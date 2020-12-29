import "./ContainerAbsolute.css";

function ContainerAbsolute(props: any): JSX.Element {
	return (
		<div className="ContainerAbsolute">{props.children}</div>
	);
}

export default ContainerAbsolute;