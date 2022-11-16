import React, {useEffect, useState} from 'react';
import {useThree} from "@react-three/fiber";
import {
    Clock
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
                               finalCoordState
                           }: ComponentForStateProps) => {

    const state = useThree()
    const [clock, setClock] = useState<any>(null)
    const [bool2, setBool2] = useState<boolean>(false)
    const [n, setN] = useState<number>(0)
    const [deltaX, setDeltaX] = useState<number>(0)
    const [deltaY, setDeltaY] = useState<number>(0)
    const [deltaZ, setDeltaZ] = useState<number>(0)
    const [flagForAdditionalPromotion, setFlagForAdditionalPromotion] = useState(false)

    useEffect(() => {
        setCoord({
            x: state.camera.position.x,
            y: state.camera.position.y,
            z: state.camera.position.z
        })
    }, [bool])

    useEffect(() => {
        if (moveToEdge) {

            setClock(new Clock())
            setBool2(true)
            setDeltaX((finalCoordState.x - state.camera.position.x) / 30)
            setDeltaY((finalCoordState.y - state.camera.position.y) / 30)
            setDeltaZ((finalCoordState.z - state.camera.position.z) / 30)

            setMoveToEdge(false)
            setFlagForAdditionalPromotion(true)
        }
    }, [moveToEdge, finalCoordState])

    return (
        <></>
    );
};

export default ComponentForState;