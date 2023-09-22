import './App.css'
import {Canvas} from "./Components/Canvas.jsx";
import {Polygon} from "./Components/Polygon.jsx";
import {processScale, scalePolygon} from "./Models/processScale.js";
import {useEffect, useState} from "react";
import {PolygonSettings} from "./Components/PolygonSettings.jsx";
import {rotatePolygon} from "./Models/RotatePolygon.js";
import {movePolygon} from "./Models/MovePolygon.js";

function App() {
    // const scale = processScale(40)
    const scale = 2
    const [one, setOne] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", rotate: 0, corner: 0})
    const [letter, setLetter] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", rotate: 0, corner: 0})
    const [triangle, setTriangle] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", delta: {x: 0, y: 0}, rotate: 0, corner: 0})
    function setCenterOne(object){
        setOne(prevState => {return {...prevState, ...object}})
    }

    function setCenterLetter(object){
        setLetter(prevState => {return {...prevState, ...object}})
    }

    const g = 16

    const mLetter = [
        [1*g, 2*g], [1*g, 7*g],
        [0, 7*g], [1*g, 7*g],
        [0, 0], [0, 7*g],
        [0, 0], [1*g, 0],
        [1*g, 0], [3*g, 2*g],
        [3*g, 2*g], [5*g, 0],
        [5*g, 0], [6*g, 0],
        [6*g, 0], [6*g, 7*g],
        [5*g, 7*g], [6*g, 7*g],
        [5*g, 2*g], [5*g, 7*g],
        [3*g, 4*g], [5*g, 2*g],
        [1*g, 2*g], [3*g, 4*g]
    ]

    const oneNumber = [
        [3*g, 2*g], [5*g, 0],
        [5*g, 0], [6*g, 0],
        [6*g, 0], [6*g, 7*g],
        [5*g, 7*g], [6*g, 7*g],
        [5*g, 2*g], [5*g, 7*g],
        [5*g, 2*g], [5*g, 2*g],
        [3*g, 2*g], [5*g, 2*g]
    ]

    // const rectDefault = [
    //     [0, 0], [0, 8],
    //     [0, 8], [8, 4],
    //     [8, 4], [0, 0],
    // ]
    const rectDefault = [
        [0, 0], [0, 8*g],
        [0, 8*g], [8*g, 4*g],
        [8*g, 4*g], [0, 0],
    ]
  return (
    <>
        <PolygonSettings name={"M"} corners={12} saveParams={(params) => setLetter(prevState => {return {...prevState, ...params}})}/>
        <PolygonSettings name={"One"} corners={6} saveParams={(params) => setOne(prevState => {return {...prevState, ...params}})}/>
        <Canvas>
            <Polygon corner={one.corner} scaleX={parseInt(one.scaleX)} scaleY={parseInt(one.scaleY)} rotate={parseInt(one.rotate)} x={0} y={0} polygonDefault={oneNumber} scale={scale} stroke={one.stroke} fill={one.fill}/>
            <Polygon corner={letter.corner} scaleX={parseInt(letter.scaleX)} scaleY={parseInt(letter.scaleY)} rotate={letter.rotate} x={120} y={0} polygonDefault={mLetter} scale={scale} stroke={letter.stroke} fill={letter.fill}/>
            {/*<Polygon polygonDefault={rectDefault} scale={scale} x={0} y={0} scaleX={parseInt(triangle.scaleX)} scaleY={parseInt(triangle.scaleY)} rotate={parseInt(triangle.rotate)} stroke={triangle.stroke} fill={triangle.fill}/>*/}
        </Canvas>
    </>
  )
}

export default App
