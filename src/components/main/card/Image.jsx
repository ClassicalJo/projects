export default function Image({ expand, pic, gif }) {
    return (
        <div className="image-wrapper">
            <img src={expand ? gif : pic}></img>
        </div>
    )
}
