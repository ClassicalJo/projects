import { useEffect, useRef } from 'react'
import projectList from '../../assets/projects/list.json'
import Card from './Card'
export default function Grid() {
    let projects = Object.keys(projectList)
    return (
        <div className="grid">
            {projects.map((k, i) => <Card key={`card${i}`} content={projectList[k]} time={100 + 100 * i} />)}
        </div>

    )
}
