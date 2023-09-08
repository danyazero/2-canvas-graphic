import './App.css'
import {Canvas} from "./Components/Canvas.jsx";
import {OneNumber} from "./Symbols/OneNumber.jsx";
import {MLetter} from "./Symbols/MLetter.jsx";

function App() {

  return (
    <>
        <Canvas>
            <MLetter x={3} y={3}/>
            <OneNumber x={120} y={3}/>
        </Canvas>
    </>
  )
}

export default App
