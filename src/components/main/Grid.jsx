import Card from './card'
import projectList from '../../assets/projects/list.json'
let importAll = r => r.keys().map(r)
let gifs = importAll(require.context('../../assets/projects/gifs', false, /\.(png|jpe?g|gif)$/)).reverse()
let pics = importAll(require.context('../../assets/projects/pngs', false, /\.(png|jpe?g|gif)$/)).reverse()

export default function Grid() {
    let projects = Object.keys(projectList).reverse()
    return (
        <div className="grid">
            {projects.map((k, i) => <Card key={`card${i}`} 
            content={projectList[k]}
            pic={pics[i]} 
            gif={gifs[i]}
            time={100 + 100 * i} />)}
        </div>

    )
}
