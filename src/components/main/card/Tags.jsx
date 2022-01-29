export default function Tags({ tags }) {
    return (
        <p className="tags">
            <hr className="line" />
            {tags.map((k, i) => <span key={"span" + i}>{k} </span>)}
        </p>
    )
}
