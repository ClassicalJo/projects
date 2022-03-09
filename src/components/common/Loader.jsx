import { useEffect, useState } from "react";
import Loading from "./Loading";
import WebFont from "webfontloader";
import Main from '../main/Main'

let importAll = r => r.keys().map(r)
const webms = importAll(require.context('../../assets/projects/webms'))

export default function Loader() {
    let [ready, setReady] = useState(false)
    let [done, setDone] = useState(false)
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Josefin Sans'],
            },
            active: () => setReady(true)
        })
    }, [])
    switch (ready) {
        case true: return (
            <>
                <Main></Main>
            </>
        );
        default: return <Loading />
    }
}
