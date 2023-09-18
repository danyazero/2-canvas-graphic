import {Layer, Stage} from "react-konva";

export const Canvas = ({children}) => {

    return (
        <>
            <Stage width={1920} height={1080}>
                <Layer>
                    {children}
                </Layer>
            </Stage>
        </>
    )
}