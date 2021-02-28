import "./ContainerComponent.scss";

function ContainerComponent(props: { [k: string]: any }): JSX.Element {
    return (
        <table id={props.id} className="ContainerComponent">
            <caption className={props.colour}>{props.title}</caption>
            <tbody>{props.children}</tbody>
        </table>
    );
}

export default ContainerComponent;