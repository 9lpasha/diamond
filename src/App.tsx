import './App.css'
import React, {useEffect, useRef, useState} from "react";
import CanvasMain from "./CanvasMain";
import {Canvas} from "@react-three/fiber";

function App() {

    const [ifAnswer, setIfAnswer] = useState(false)
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [delta] = useState([])
    const canvas = useRef<HTMLCanvasElement>(null)
    const [labelsOnDiamonds] = useState(['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агидель', 'Агрыз', 'Адыгейск', 'Азнакаево', 'Азов', 'Ак-Довурак', 'Аксай', 'Алагир', 'Алапаевск', 'Алатырь', 'Алдан', 'Алейск', 'Александров', 'Александровск-Сахалинский', 'Александровск', 'Алексеевка', 'Алексин', 'Алзамай', 'Алупка', 'Алушта', 'Альметьевск', 'Амурск', 'Анадырь', 'Анапа', 'Ангарск', 'Андреаполь', 'Анжеро-Судженск', 'Анива', 'Апатиты', 'Апрелевка', 'Апшеронск', 'Арамиль', 'Аргун', 'Ардатов', 'Ардон', 'Арзамас', 'Аркадак', 'Армавир', 'Армянск', 'Арсеньев', 'Арск', 'Артём', 'Артёмовск', 'Артёмовский', 'Архангельск', 'Асбест'])
    const [random, setRandom] = useState(0)

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            (document.querySelector(".App") as HTMLDivElement).style.height =
                window.innerHeight + "px";
        } else {
            (document.querySelector(".App") as HTMLDivElement).style.height = "100vh";
        }
    }, [])

    return (
        <div className="App" style={{width: '100vw', height: '100vh', position: 'relative'}}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Canvas ref={canvas} camera={{
                fov: 75, near: 1, far: 20, position: [3.1, 0, 0]
            }} shadows={true}>
                <CanvasMain isClicked={isClicked} setIsClicked={setIsClicked} setRandom={setRandom}/>
            </Canvas>
            <button style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translate(-50%, 0)'
            }} className="glow-on-hover" type="button" onClick={() => {
                setIsClicked(!isClicked)
                //console.log('sadas')
            }}>Запустить
            </button>
            <div style={{
                /*display: 'none',*/
                opacity: '0'
            }} className='answer'>
                {labelsOnDiamonds[random]}
            </div>
        </div>
    )
}

export default App