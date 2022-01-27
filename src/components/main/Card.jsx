import { useEffect, useState } from "react"
import useExpand from "./useExpand"


export default function Card({ time, content }) {
    let [appear, setAppear] = useState('')
    let { expand, reduce, toggle } = useExpand()
    let wrapper = 'project-card-wrapper ' + appear + (expand ? ' expanded' : '')
    let card = 'project-card' + (expand ? ' expanded-height' : '') + (reduce ? " reduce" : '')
    let { title } = content
    useEffect(() => {
        let timeout = setTimeout(() => setAppear('appear'), time)
        return () => clearTimeout(timeout)
    }, [])
    return (
        <div
            onClick={toggle}
            className={wrapper}  >
            <div className={card} >
                <div className="image-wrapper">
                    <img src="https://via.placeholder.com/350"></img>
                </div>
                <p>{title}</p>
            </div>
        </div>

    )
}
