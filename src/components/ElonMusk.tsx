import '../../setPublic/css/ElonMusk.css'
import { useRef, useEffect, useState } from 'react'
import Integrate from '../integrate'

const ElonMusk = () => {
    const canva = useRef(null)
    useEffect(() => {
        const canvas: any = canva.current
        const ctx = canvas.getContext('2d')
        const image = new Image();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let size = 7
        image.src = '../../setPublic/img/ElonMusk.png';
        let cells: any = []
        let imageData = null;
        class Cell {
            color: any
            position: any
            basePosition: any
            speed: any
            constructor({x, y, color}: any) {
                this.color = color
                this.position = { x, y }
                this.basePosition = { x, y }
                this.speed = 5
            }
            draw() {
                // ctx.beginPath()
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`
                // ctx.arc(this.position.x, this.position.y, size/2, 0, Math.PI*2)
                // ctx.closePath()
                // ctx.fill()
                ctx.fillRect(this.position.x, this.position.y, size, size)
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
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height)
            cells = []
            imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for(let y = 0; y<canvas.height; y+=size) {
                for(let x = 0; x<canvas.width; x+=size) {
                    const color = {
                        r: imageData[(y*4*canvas.width) + (x*4)],
                        g: imageData[(y*4*canvas.width) + (x*4) + 1],
                        b: imageData[(y*4*canvas.width) + (x*4) + 2],
                        a: imageData[(y*4*canvas.width) + (x*4) + 3]
                    }
                    if(color.a > 100) cells.push(new Cell({x, y, color}))
                }
            }
            cells.forEach((cell: any) => {
                cell.position.x = Math.floor(Math.random() * canvas.width)
                cell.position.y = Math.floor(Math.random() * canvas.height/5)
                cell.speed = Math.floor(Math.random() * 5 + 5)
            })
        };

        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            cells.forEach((cell: any) => {
                cell.logic()
                cell.draw()
            })
        }
        animate()

        image.addEventListener('load', () => { handleResize(); window.addEventListener("resize", handleResize) })
    })

    return (<>
    <div className='absPos'>
        <canvas id="canvas" ref={canva}>Canva nu merge:(</canvas>
        <div className="citat">"Este mai ușor să aterizezi un om pe marte decât să schimbi sistemul școlar"<div>Elon Musk</div></div>
    </div>
    <Integrate />
    </>)
}

export default ElonMusk