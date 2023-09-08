import {createContext} from "react";
import {Layer, Stage} from "react-konva";

export const CanvasContext = createContext(null)
export const Canvas = ({children}) => {

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {children}
                </Layer>
            </Stage>
        </>
    )
}