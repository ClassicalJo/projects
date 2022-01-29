import Header from "../header/Header";
import Background from "./Background";
import Grid from "./Grid";


export default function Main() {
    return (
        <div className="main">
            <Background />
            <Grid />
            <Header />
        </div>
    )
}
