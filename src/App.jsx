import './App.css'
import {Canvas} from "./Components/Canvas.jsx";
import {Polygon} from "./Components/Polygon.jsx";
import {processScale, scalePolygon} from "./Models/processScale.js";
import {useEffect, useState} from "react";
import {PolygonSettings} from "./Components/PolygonSettings.jsx";
import {rotatePolygon} from "./Models/RotatePolygon.js";
import {movePolygon} from "./Models/MovePolygon.js";

function App() {
    const scale = processScale(40)
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

    const rectDefault = [
        [0, 0], [0, 7],
        [0, 7], [7, 3.5],
        [7, 3.5], [0, 0],
    ]
    const [rect, setRect] = useState(rectDefault)

    useEffect(() => {
        setRect(movePolygon(rect, (triangle.delta.x) / scale, (triangle.delta.y) / scale))
    }, [triangle.delta])

    useEffect(() => {
        setRect(scalePolygon(movePolygon(rectDefault, triangle.delta.x / scale, triangle.delta.y / scale), triangle.scaleX, triangle.scaleY))
    }, [triangle.scaleX, triangle.scaleY])

    useEffect(() => {
        // console.log(rotatePolygon(rect, triangle.rotate))
        setRect(rotatePolygon(movePolygon(rectDefault, triangle.delta.x / scale, triangle.delta.y / scale), triangle.rotate))
    }, [triangle.rotate])
    console.log(rect)
  return (
    <>
        <PolygonSettings name={"M"} saveParams={(params) => setLetter(prevState => {return {...prevState, ...params}})}/>
        <PolygonSettings name={"One"} saveParams={(params) => setTriangle(prevState => {return {...prevState, ...params}})}/>
        <Canvas>
            {/*<Polygon setCenterParams={setCenterLetter} polygon={scalePolygon(mLetter, parseInt(letter.scaleX), parseInt(letter.scaleY))} x={0} y={0} stroke={letter.stroke} fill={letter.fill} userScale={20}/>*/}
            {/*<Polygon setCenterParams={setCenterOne} polygon={scalePolygon(oneNumber, parseInt(one.scaleX), parseInt(one.scaleY))} x={40} y={0} stroke={one.stroke} fill={one.fill} userScale={20}/>*/}
            <Polygon polygon={rect} scale={scale} x={0} y={0} setDelta={(delta) => setTriangle(prevState => {return {...prevState, delta}})}/>
        </Canvas>
    </>
  )
}

export default App
