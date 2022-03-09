import Card from './card'
import projectList from '../../assets/projects/list.json'
let importAll = r => r.keys().map(r)
let mp4s = importAll(require.context('../../assets/projects/mp4s')).reverse()

export default function Grid() {
    let projects = Object.keys(projectList).reverse()
    return (
        <div className="grid">
            {projects.map((k, i) => <Card key={`card${i}`}
                first={i === 0}
                content={projectList[k]}
                mp4={mp4s[i]}
                time={100 + 100 * i} />)}
        </div>

    )
}
