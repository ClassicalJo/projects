import { useEffect, useState } from "react";
import Loading from "./Loading";
import WebFont from "webfontloader";
import Grid from "../main/Grid";
import Main from '../main/Main'
import Header from "../header/Header";


export default function Loader({ element }) {
    let [ready, setReady] = useState(false)
    let [done, setDone] = useState(false)
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Josefin Sans'],
            },
            active: () => setReady(true)
        })
        let timeout = setTimeout(() => setDone(true), 500)
        return () => clearTimeout(timeout)
    }, [])
    switch (ready && done) {
        case true: return (
            <>
                <Main></Main>
            </>
        );
        default: return <Loading />
        
    }
}
