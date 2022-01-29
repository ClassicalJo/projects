import { useEffect, useRef } from "react"

export default function Background() {
    useEffect(() => {
        let x = 0
        let ctx = ref.current.getContext('2d')

        function update() {
            x++
        }
        function render() {
            let grad = ctx.createLinearGradient(0, 0, 0, 1900)
            grad.addColorStop(0, "#add8e6")
            grad.addColorStop(1, "#0066CC")

            ctx.fillStyle = grad
            ctx.fillRect(0, 0, 1900, 1080)
        }
        function animate() {
            requestAnimationFrame(() => {
                update()
                render()
                animate()
            })
        }
        animate()
    }, [])
    let ref = useRef()
    return (
        <div className="background">
            <canvas width="1900" height="1080" ref={ref}></canvas>
        </div>
    )
}
