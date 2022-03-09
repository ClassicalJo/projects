import { useEffect, useState } from "react"
import ActionZone from "./ActionZone"
import Image from "./Demo"
import gh from '../../../assets/github.png'
import play from '../../../assets/play.png'
import Tags from "./Tags"
import useExpand from "./useExpand"
import Wrapper from "./Wrapper"

export default function Card({ time, content, mp4, first }) {
    let [appear, setAppear] = useState('')
    let { expand, reduce, toggle } = useExpand(first)
    useEffect(() => {
        let timeout = setTimeout(() => setAppear('appear'), time)
        return () => clearTimeout(timeout)
    }, [time])

    let { title, desc, tags, test, repo } = content
    let imageProps = { mp4, expand }
    let wrapperProps = { toggle, expand, reduce }
    let actionProps = { repo, test, gh, play }

    return (
        <Wrapper {...wrapperProps}>
            <div className={'project-card ' + appear} >
                <Image {...imageProps} />
                <p className="title">{title}</p>
                <p className={'desc'}> {desc}</p>
                <Tags tags={tags} />
                <ActionZone {...actionProps} />
            </div>
        </Wrapper>

    )
}
