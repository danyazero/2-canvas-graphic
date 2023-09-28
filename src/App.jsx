import './App.css'
import {Canvas} from "./Components/Canvas.jsx";
import {Polygon} from "./Components/Polygon.jsx";
import {useState} from "react";
import {PolygonSettings} from "./Components/PolygonSettings.jsx";
import {Circle} from "react-konva";

function App() {
    // const scale = processScale(40)
    const scale = 2
    const [letter, setLetter] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", rotate: 0, corner: 0})
    const [DLetter, setDLetter] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})

    const [one, setOne] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#660032", rotate: 0, corner: 0})
    const [sevenNumber, setSevenNumber] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})

    const [zero, setZero] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})
    const [fourNumber, setFourNumber] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})

    const [zeroYear, setZeroYear] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})
    const [fourNumberYear, setFourNumberYear] = useState({scaleX: 1, scaleY: 1, stroke: "#FF007F", fill: "#1273DE", rotate: 0, corner: 0})

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

    const ZeroNumberPolygon = [
        [0, 0], [3*g, 0],
        [3*g, 0], [3*g, 7*g],
        [3*g, 7*g], [0, 7*g],
        [0, 7*g], [0, 0]
    ]
    const FourNumber = [
        [3*g, 0], [0, 5*g],
        [0, 5*g], [3*g, 5*g],
        [3*g, 5*g], [3*g, 7*g],
        [3*g, 7*g], [4*g, 7*g],
        [4*g, 7*g], [4*g, 5*g],
        [4*g, 5*g], [5*g, 5*g],
        [5*g, 5*g], [5*g, 4*g],
        [5*g, 4*g], [4*g, 4*g],
        [4*g, 4*g], [4*g, 0],
        [4*g, 0], [3*g, 0],
    ]

    const SevenNumber = [
        [0, 0], [5*g, 0],
        [5*g, 0], [4*g, 7*g],
        [4*g, 7*g], [3*g, 7*g],
        [3*g, 7*g], [4*g, 1*g],
        [4*g, 1*g], [1*g, 1*g],
        [1*g, 1*g], [0, 0]
    ]

    function scaling(point){
        return point * scale * g
    }

    const DLetterPolygon = [
        [1*g, 0], [1*g, 4*g],
        [1*g, 4*g], [0, 4*g],
        [0, 4*g], [0, 6*g],
        [0, 6*g], [1*g, 6*g],
        [1*g, 6*g], [1*g, 5*g],
        [1*g, 5*g], [3*g, 5*g],
        [3*g, 5*g], [3*g, 6*g],
        [3*g, 6*g], [4*g, 6*g],
        [4*g, 6*g], [4*g, 4*g],
        [4*g, 4*g], [3*g, 4*g],
        [3*g, 4*g], [3*g, 0],
        [3*g, 0], [1*g, 0]
    ]
  return (
    <>
        <PolygonSettings name={"M"} corners={12} saveParams={(params) => setLetter(prevState => {return {...prevState, ...params}})}/>
        <PolygonSettings name={"One"} corners={6} saveParams={(params) => setOne(prevState => {return {...prevState, ...params}})}/>
        <Canvas scale={scale}>
            <Polygon corner={letter.corner} scaleX={parseInt(letter.scaleX)} scaleY={parseInt(letter.scaleY)} rotate={letter.rotate} x={0} y={0} polygonDefault={mLetter} scale={scale} stroke={letter.stroke} fill={letter.fill}/>
            <Polygon scaleX={parseInt(DLetter.scaleX)} scaleY={parseInt(DLetter.scaleY)} rotate={DLetter.rotate} corner={DLetter.corner} x={30 * g} y={0} polygonDefault={DLetterPolygon} stroke={DLetter.stroke} fill={DLetter.fill} scale={scale}/>

            <Polygon corner={one.corner} scaleX={parseInt(one.scaleX)} scaleY={parseInt(one.scaleY)} rotate={parseInt(one.rotate)} x={40 * g} y={0} polygonDefault={oneNumber} scale={scale} stroke={one.stroke} fill={one.fill}/>
            <Polygon scaleX={parseInt(sevenNumber.scaleX)} scaleY={parseInt(sevenNumber.scaleY)} rotate={sevenNumber.rotate} corner={sevenNumber.corner} x={65 * g} y={0} polygonDefault={SevenNumber} stroke={sevenNumber.stroke} fill={sevenNumber.fill} scale={scale}/>

            <Circle x={45 * g} y={14 * g} radius={12} fill={"#000"}/>
            <Polygon scaleX={parseInt(zero.scaleX)} scaleY={parseInt(zero.scaleY)} rotate={parseInt(zero.rotate)} corner={parseInt(zero.corner)} x={95 * g} y={0} polygonDefault={ZeroNumberPolygon} stroke={zero.stroke} fill={zero.fill} scale={scale}/>
            <Polygon scaleX={parseInt(fourNumber.scaleX)} scaleY={parseInt(fourNumber.scaleY)} rotate={fourNumber.rotate} corner={fourNumber.corner} x={110 * g} y={0} polygonDefault={FourNumber} stroke={fourNumber.stroke} fill={fourNumber.fill} scale={scale}/>

            <Circle x={66 * g} y={14 * g} radius={12} fill={"#000"}/>

            <Polygon scaleX={parseInt(zeroYear.scaleX)} scaleY={parseInt(zeroYear.scaleY)} rotate={parseInt(zeroYear.rotate)} corner={parseInt(zeroYear.corner)} x={140 * g} y={0} polygonDefault={ZeroNumberPolygon} stroke={zeroYear.stroke} fill={zeroYear.fill} scale={scale}/>
            <Polygon scaleX={parseInt(fourNumberYear.scaleX)} scaleY={parseInt(fourNumberYear.scaleY)} rotate={fourNumberYear.rotate} corner={fourNumberYear.corner} x={160 * g} y={0} polygonDefault={FourNumber} stroke={fourNumberYear.stroke} fill={fourNumberYear.fill} scale={scale}/>
        </Canvas>
    </>
  )
}

export default App
