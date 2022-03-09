import Card from './card'
import projectList from '../../assets/projects/list.json'
let importAll = r => r.keys().map(r)
let webms = importAll(require.context('../../assets/projects/webms')).reverse()

export default function Grid() {
    let projects = Object.keys(projectList).reverse()
    return (
        <div className="grid">
            {projects.map((k, i) => <Card key={`card${i}`}
                first={i === 0}
                content={projectList[k]}
                webm={webms[i]}
                time={100 + 100 * i} />)}
        </div>

    )
}
