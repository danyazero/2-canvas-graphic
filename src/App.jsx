import './App.css'
import {Canvas} from "./Models/Canvas.jsx";
import {Polygon} from "./Symbols/Polygon.jsx";

function App() {

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
        <Canvas>
            <Polygon polygon={mLetter} x={6} y={6} userScale={10}/>
            <Polygon polygon={oneNumber} x={220} y={3} userScale={10}/>
        </Canvas>
    </>
  )
}

export default App
