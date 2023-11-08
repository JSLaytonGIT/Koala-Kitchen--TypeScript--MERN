import './Panel.scss';

const Panel = (props: { imageSrc: string, altText: string }) => {
    return (
        <div className="panel" data-alt-text={props.altText}>
            <img src={props.imageSrc} alt={props.altText} className="panel-image" />
        </div>
    )
}

export default Panel;