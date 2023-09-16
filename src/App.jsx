import './App.css'
import {Canvas} from "./Components/Canvas.jsx";
import {Polygon} from "./Components/Polygon.jsx";
import {scalePolygon} from "./Models/processScale.js";
import {useState} from "react";
import {PolygonSettings} from "./Components/PolygonSettings.jsx";

function App() {
    const [one, setOne] = useState({scaleX: 1, scaleY: 1, posX: 40, posY: 0, stroke: "#FF007F", fill: "#660032"})
    const [letter, setLetter] = useState({scaleX: 1, scaleY: 1, posX: 0, posY: 0, stroke: "#FF007F", fill: "#660032"})

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

  return (
    <>
        <PolygonSettings name={"One"} saveParams={(params) => setOne(params)}/>
        <PolygonSettings name={"M"} saveParams={(params) => setLetter(params)}/>
        <Canvas>
            <Polygon polygon={scalePolygon(mLetter, parseInt(letter.scaleX), parseInt(letter.scaleY))} x={letter.posX} y={letter.posY} stroke={letter.stroke} fill={letter.fill} userScale={20}/>
            <Polygon polygon={scalePolygon(oneNumber, parseInt(one.scaleX), parseInt(one.scaleY))} x={one.posX} y={one.posY} stroke={one.stroke} fill={one.fill} userScale={20}/>
        </Canvas>
    </>
  )
}

export default App
