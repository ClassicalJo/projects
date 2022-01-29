import Header from "../header/Header";
import Background from "./background";
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
