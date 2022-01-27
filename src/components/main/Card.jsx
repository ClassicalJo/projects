import { useEffect, useState } from "react"
import useExpand from "./useExpand"


export default function Card({ time, content }) {
    let [appear, setAppear] = useState('')
    let { expand, reduce, toggle } = useExpand()
    useEffect(() => {
        let timeout = setTimeout(() => setAppear('appear'), time)
        return () => clearTimeout(timeout)
    }, [])
    
    let className = () => {
        let str = 'project-card-wrapper '
        if (reduce) return str + 'reduced'
        if (expand) return str + 'expanded'
        else return str
    }

    let { title } = content
    
    return (
        <div
            onClick={toggle}
            className={className()}  >
            <div className={'project-card ' + appear} >
                <div className="image-wrapper">
                    <img src="https://via.placeholder.com/350"></img>
                </div>
                <p>{title}</p>
            </div>
        </div>

    )
}
