import "./ContainerComponent.css";

function ContainerComponent(props: { [k: string]: any }): JSX.Element {
    return (
        <div className="ContainerComponent">{props.children}</div>
    );
}

export default ContainerComponent;