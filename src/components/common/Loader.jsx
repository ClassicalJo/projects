import { useEffect, useState } from "react";
import Loading from "./Loading";
import WebFont from "webfontloader";
import Main from '../main/Main'

let importAll = r => r.keys().map(r)
const mp4s = importAll(require.context('../../assets/projects/mp4s'))

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
        async function preloadImages() {
            let promisedVideos = mp4s.map((k) => new Promise(resolve => {
                let video = document.createElement('video')
                video.src = k
                video.onloadeddata = function () {
                    resolve(this)
                }
            }))

            let promisedTime = new Promise(resolve => setTimeout(() => resolve(this), 500))
            Promise.all([...promisedVideos, promisedTime]).then(() => setDone(true))

        }
        preloadImages()


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
