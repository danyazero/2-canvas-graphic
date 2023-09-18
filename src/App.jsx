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
    const [one, setOne] = useState({scaleX: 3, scaleY: 3, stroke: "#FF007F", fill: "#660032", rotate: 0})
    const [letter, setLetter] = useState({scaleX: 3, scaleY: 3, stroke: "#FF007F", fill: "#660032", rotate: 0})
    const [triangle, setTriangle] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", delta: {x: 0, y: 0}, rotate: 0})
    function setCenterOne(object){
        setOne(prevState => {return {...prevState, ...object}})
    }

    function setCenterLetter(object){
        setLetter(prevState => {return {...prevState, ...object}})
    }

    const mLetter = [
        [1, 1.5], [1, 7],
        [0, 7], [1, 7],
        [0, 0], [0, 7],
        [0, 0], [1, 0],
        [1, 0], [3, 2],
        [3, 2], [5, 0],
        [5, 0], [6, 0],
        [6, 0], [6, 7],
        [5, 7], [6, 7],
        [5, 1.5], [5, 7],
        [3, 3.5], [5, 1.5],
        [1, 1.5], [3, 3.5]
    ]

    const oneNumber = [
        [3, 2], [5, 0],
        [5, 0], [6, 0],
        [6, 0], [6, 7],
        [5, 7], [6, 7],
        [5, 1.5], [5, 7],
        [4.5, 2], [5 ,1.5],
        [3, 2], [4.5, 2]
    ]

    // const rectDefault = [
    //     [0, 0], [0, 8],
    //     [0, 8], [8, 4],
    //     [8, 4], [0, 0],
    // ]

    const g = 12
    const rectDefault = [
        [0, 0], [0, 8*g],
        [0, 8*g], [8*g, 4*g],
        [8*g, 4*g], [0, 0],
    ]
  return (
    <>
        <PolygonSettings name={"M"} saveParams={(params) => setLetter(prevState => {return {...prevState, ...params}})}/>
        <PolygonSettings name={"One"} saveParams={(params) => setTriangle(prevState => {return {...prevState, ...params}})}/>
        <Canvas>
            {/*<Polygon setCenterParams={setCenterLetter} polygon={scalePolygon(mLetter, parseInt(letter.scaleX), parseInt(letter.scaleY))} x={0} y={0} stroke={letter.stroke} fill={letter.fill} userScale={20}/>*/}
            {/*<Polygon setCenterParams={setCenterOne} polygon={scalePolygon(oneNumber, parseInt(one.scaleX), parseInt(one.scaleY))} x={40} y={0} stroke={one.stroke} fill={one.fill} userScale={20}/>*/}
            <Polygon polygonDefault={rectDefault} scale={scale} x={0} y={0} scaleX={parseInt(triangle.scaleX)} scaleY={parseInt(triangle.scaleY)} rotate={parseInt(triangle.rotate)} stroke={triangle.stroke} fill={triangle.fill}/>
        </Canvas>
    </>
  )
}

export default App
