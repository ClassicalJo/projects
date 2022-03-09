import { useEffect, useState } from "react";
import Loading from "./Loading";
import WebFont from "webfontloader";
import Main from '../main/Main'

export default function Loader() {
    let [ready, setReady] = useState(false)
    
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
