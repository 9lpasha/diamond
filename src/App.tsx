import './App.css'
import React, {useRef, useState} from "react";
import CanvasMain from "./CanvasMain";
import {Canvas} from "@react-three/fiber";

function App() {

    const [ifAnswer, setIfAnswer] = useState(false)
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [delta] = useState([])
    const canvas = useRef<HTMLCanvasElement>(null)

    return (
        <div className="App" style={{width: '100vw', height: '100vh', position: 'relative'}}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Canvas ref={canvas} camera={{
                fov: 75, near: 1, far: 20, position: [3.1, 0, 0]
            }}>
                <CanvasMain isClicked={isClicked} setIsClicked={setIsClicked}/>
            </Canvas>
            <button style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translate(-50%, 0)'
            }} className="glow-on-hover" type="button" onClick={() => {
                setIsClicked(!isClicked)
                console.log('sadas')
            }}>Запустить
            </button>
            <div style={{
                display: /*ifAnswer ? 'block' : */'none'
            }} className='answer'>
                Большой ответ!
                Большой ответ!
                Большой ответ!
                Большой ответ!
            </div>
        </div>
    )
}

export default App