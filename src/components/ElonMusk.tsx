import '../../setPublic/css/ElonMusk.css'
import { useRef, useEffect } from 'react'

const ElonMusk = () => {
    const canva = useRef(null)
    useEffect(() => {
        const canvas: any = canva.current
        const ctx: any = canvas.getContext('2d')
        const image = new Image();
        const size: any = { x: 50, y: 50 }
        let cells: Array<any> = []
        image.src = '../../setPublic/img/ElonMusk.jpg';
        class Cell {
            cellPosition: any
            basePosition: any
            position: any
            speed: any

            constructor({x, y}: any) {
                this.cellPosition = {x,y}
                this.position = {
                    x: this.cellPosition.x*size.x,
                    y: this.cellPosition.y*size.y
                }
                this.basePosition = {
                    x: this.cellPosition.x*size.x,
                    y: this.cellPosition.y*size.y
                }
                this.speed = 40
            }
            draw() {
                ctx.drawImage(image, (image.width-canvas.width)/2+this.cellPosition.x*size.x, (image.height-canvas.height)/2+this.cellPosition.y*size.y, size.x, size.y, this.position.x, this.position.y, size.x, size.y);
            }
            logic() {
                if(this.position.x != this.basePosition.x) {
                    let dx = this.position.x - this.basePosition.x
                    this.position.x -= dx/this.speed
                }
                if(this.position.y != this.basePosition.y) {
                    let dy = this.position.y - this.basePosition.y
                    this.position.y -= dy/this.speed
                }
            }
        }
        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const cell = {
                x: Math.floor(canvas.width/size.x),
                y: Math.floor(canvas.height/size.y)
            }
            cells = []
            for(let y=0; y<=cell.y; y++ ) {
                for(let x=0; x<=cell.x; x++) {
                    cells.push(new Cell({x,y}))
                }
            }
            cells.forEach(cell => {
                const random = {
                    x: Math.floor(Math.random() * 1000 - 500),
                    y: Math.floor(Math.random() * 1000 - 500),
                }
                cell.position.x += random.x
                cell.position.y += random.y
            })
        };

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            cells.forEach(cell => {
                cell.logic()
                cell.draw()
            })
            requestAnimationFrame(animate)
        }
        animate()

        image.addEventListener('load', () => { handleResize(); window.addEventListener("resize", handleResize) })
    }, [])

    return (<>
        <canvas id="canvas" ref={canva}>Canva nu merge:(</canvas>
        <div className="citat">"Mai bine trimit rachete în spațiu decât să schimb sistemul educațional"<div>Elon Musk</div></div>
    </>)
}

export default ElonMusk