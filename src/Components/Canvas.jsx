import {Layer, Stage} from "react-konva";

export const Canvas = ({children}) => {

    return (
        <>
            <Stage width={1280} height={1280}>
                <Layer>
                    {children}
                </Layer>
            </Stage>
        </>
    )
}