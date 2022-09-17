import React, {useEffect, useState} from 'react';
import {useThree} from "@react-three/fiber";
import {
    Clock,
    WebGLRenderer
} from "three";

interface ComponentForStateProps {
    bool: boolean
    setCoord: any
    moveToEdge: boolean
    setMoveToEdge: any
    finalCoordState: any
    camera: any
}

const ComponentForState = ({
                               bool,
                               setCoord,
                               setMoveToEdge,
                               moveToEdge,
                               finalCoordState,
                               camera
                           }: ComponentForStateProps) => {

    const state = useThree()
    const [clock, setClock] = useState<any>(null)
    const [bool2, setBool2] = useState<boolean>(false)
    const [n, setN] = useState<number>(0)
    const [deltaX, setDeltaX] = useState<number>(0)
    const [deltaY, setDeltaY] = useState<number>(0)
    const [deltaZ, setDeltaZ] = useState<number>(0)

    useEffect(() => {
        console.log(state)
    }, [])

    useEffect(() => {
        setCoord({
            x: state.camera.position.x,
            y: state.camera.position.y,
            z: state.camera.position.z
        })
    }, [bool])

    useEffect(() => {
        if (moveToEdge == true) {
            //state.camera.name = 'Camera'
            /*const animation = new AnimationMixer(state.camera)
            const track = new VectorKeyframeTrack(
                'Camera.position',
                [0, 1],
                [
                    state.camera.position.x,
                    state.camera.position.y,
                    state.camera.position.z,
                    finalCoordState.x,
                    finalCoordState.y,
                    finalCoordState.z,
                ]
            );
            const clip = new AnimationClip('smooth', 1, [track])
            const animationAction = animation.clipAction(clip);
            animationAction.timeScale = 1
            animationAction.play();*/

            //state.camera.position.set(finalCoordState.x, finalCoordState.y, finalCoordState.z)

            setClock(new Clock())
            setBool2(true)
            setDeltaX((-state.camera.position.x + finalCoordState.x) / 30)
            setDeltaY((-state.camera.position.y + finalCoordState.y) / 30)
            setDeltaZ((-state.camera.position.z + finalCoordState.z) / 30)

            setMoveToEdge(false)
            console.log(state.scene.children)
        }
    }, [moveToEdge, finalCoordState])

    useEffect(() => {
        if(clock && clock.getElapsedTime() < 0.5 && clock.getElapsedTime() > n * 0.01 &&
            (deltaX >= 0 && finalCoordState.x > state.camera.position.x ||
                deltaX <= 0 && finalCoordState.x < state.camera.position.x)){
            state.camera.position.set(state.camera.position.x + deltaX, state.camera.position.y + deltaY,
                state.camera.position.z + deltaZ)
            console.log(clock.getElapsedTime())
            setN((n) => n+1)
        }
        if(clock && clock.getElapsedTime() > 0.5){
            setClock(null)
            setBool2(false)
            setN(0)
        }
    })

    return (
        <></>
    );
};

export default ComponentForState;