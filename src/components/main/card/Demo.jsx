import { useRef, useEffect } from 'react'

export default function Demo({ expand, mp4 }) {
    let ref = useRef()
    useEffect(() => {
        let video = ref.current
        if (expand) video.play()
        else video.pause()
    }, [expand])
    return (
        <div className="demo-wrapper">
            <video ref={ref} src={mp4} loop muted autoPlay />
        </div>
    )
}
