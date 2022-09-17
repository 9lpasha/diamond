import './App.css'
import React from "react";
import CanvasMain from "./CanvasMain";

function App() {

    return (
        <div className="App" style={{width: '100vw', height: '100vh'}}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <CanvasMain/>
        </div>
    )
}

export default App