import {Layer, Stage} from "react-konva";

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