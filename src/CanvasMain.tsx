import React, {useRef, useState} from 'react';
import {OrbitControls} from "@react-three/drei";
import {Diamond} from "./diamond/Diamond";
import {Canvas} from "@react-three/fiber";
import ComponentForState from "./ComponentForState";

let timeout: any

const CanvasMain = () => {

    const canvas = useRef<HTMLCanvasElement>(null)
    const [moveStarted, setMoveStarted] = useState<boolean>(false)
    const [moveEnded, setMoveEnded] = useState<boolean>(true)
    const [bool, setBool] = useState<boolean>(false)
    const [coordState, setCoordState] = useState<any>({})
    const [moveToEdge, setMoveToEdge] = useState<boolean>(false)
    const [finalCoordState, setFinalCoordState] = useState<any>({})
    const camera = useRef<any>(null)

    const rotateArray = [
        {
            num: 1,
            x:2.95,
            y:-1.2,
            z:0.33
        },
        {
            num: 2,
            x:2.31,
            y:-1.2,
            z:1.76
        },
        {
            num: 3,
            x:1.12,
            y:-1.2,
            z:2.61
        },
        {
            num: 4,
            x:-0.27,
            y:-1.2,
            z:2.65
        },
        {
            num: 5,
            x:-1.59,
            y:-1.2,
            z:2.24
        },
        {
            num: 6,
            x:-2.6,
            y:-1.2,
            z:1.06
        },
        {
            num: 7,
            x:-2.86,
            y:-1.2,
            z:-0.26
        },
        {
            num: 8,
            x:-2.27,
            y:-1.2,
            z:-1.69
        },
        {
            num: 9,
            x:-1.15,
            y:-1.2,
            z:-2.58
        },
        {
            num: 10,
            x:0.27,
            y:-1.2,
            z:-2.81
        },
        {
            num: 11,
            x:1.58,
            y:-1.2,
            z:-2.34
        },
        {
            num: 12,
            x:2.61,
            y:-1.2,
            z:-1.18
        },
        {
            num: 13,
            x:2.99,
            y:0.65,
            z:0.48
        },
        {
            num: 14,
            x:2.54,
            y:0.67,
            z:1.63
        },
        {
            num: 15,
            x:1.77,
            y:1.32,
            z:2.17
        },
        {
            num: 16,
            x:1.12,
            y:0.61,
            z:2.82
        },
        {
            num: 17,
            x:-0.16,
            y:0.69,
            z:3.01
        },
        {
            num: 18,
            x:-0.93,
            y:1.17,
            z:2.71
        },
        {
            num: 19,
            x:-1.89,
            y:0.65,
            z:2.36
        },
        {
            num: 20,
            x:-2.69,
            y:0.57,
            z:1.42
        },
        {
            num: 21,
            x:-2.87,
            y:1.05,
            z:0.48
        },
        {
            num: 22,
            x:-3.01,
            y:0.61,
            z:-0.35
        },
        {
            num: 23,
            x:-2.53,
            y:0.71,
            z:-1.63
        },
        {
            num: 24,
            x:-1.91,
            y:1,
            z:-2.21
        },
        {
            num: 25,
            x:-1.16,
            y:0.47,
            z:-2.83
        },
        {
            num: 26,
            x:0.14,
            y:0.63,
            z:-3.03
        },
        {
            num: 27,
            x:0.97,
            y:1.16,
            z:-2.7
        },
        {
            num: 28,
            x:1.87,
            y:0.53,
            z:-2.41
        },
        {
            num: 29,
            x:2.63,
            y:0.59,
            z:-1.51
        },
        {
            num: 30,
            x:2.84,
            y:1.13,
            z:-0.46
        }
    ]

    return (
        <Canvas ref={canvas} camera={{
            fov: 75, near: 1, far: 20, position: [5, 0, 0]
        }}>
            <ComponentForState bool={bool} setCoord={setCoordState} moveToEdge={moveToEdge} setMoveToEdge={setMoveToEdge}
            finalCoordState={finalCoordState} camera={camera.current}/>
            <OrbitControls minDistance={3.1} rotateSpeed={0.5} maxDistance={10} onEnd={() => {
                setMoveStarted(true)
                setMoveEnded(false)
            }} onChange={(e) => {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    setMoveStarted(false)
                }, 20)
                setBool(!bool)
                if(moveStarted == false && moveEnded == false) {
                    setMoveEnded(true)
                    let maxCoincidence: any = {}
                    let minSum = 1000
                    rotateArray.forEach((rotation) => {
                        const sum = Math.abs(coordState.x - rotation.x) + Math.abs(coordState.y - rotation.y) +
                            Math.abs(coordState.z - rotation.z)
                        if(sum < minSum){
                            minSum = sum
                            maxCoincidence = rotation
                        }
                    })
                    console.log(maxCoincidence.num)
                    setMoveToEdge(true)
                    setFinalCoordState(maxCoincidence)
                }
            }}/>
            <pointLight intensity={1.0} position={[5, 0, 0]} color={'#B9F2FF'}/>
            <pointLight intensity={1.0} position={[-5, 0, 0]} color={'#B9F2FF'}/>
            <pointLight intensity={1.0} position={[0, 0, 5]} color={'#B9F2FF'}/>
            <pointLight intensity={1.0} position={[0, 0, -5]} color={'#B9F2FF'}/>
            <pointLight intensity={1.0} position={[0, 5, 0]} color={'#B9F2FF'}/>
            <pointLight intensity={0.5} position={[0, -5, 0]} color={'#B9F2FF'}/>
            <Diamond position={0}/>
        </Canvas>
    );
};

export default CanvasMain;