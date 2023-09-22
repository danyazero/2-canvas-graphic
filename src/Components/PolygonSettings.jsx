import {useState} from "react";
import {GithubPicker, HuePicker, SliderPicker} from "react-color";

export const PolygonSettings = ({saveParams, name, corners}) => {
    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)
    const [rotate, setRotate] = useState("0")
    const [stroke, setStroke] = useState("#FF007F")
    const [fill, setFill] = useState("#660032")
    const [corner, setCorner] = useState(0)

    function renderOptions(corners){
        let array = []
        for (let i = 0; i < corners; i++) {
            array.push(<option key={"option_"+i} value={i}>{i+1} corner</option>)
        }

        return array
    }

    function onSubmit(event){
        event.preventDefault()
        saveParams({scaleX, scaleY, stroke, fill, rotate, corner})
    }
    return (
        <form onSubmit={onSubmit} style={{display: "flex", flexDirection: "row", gap: "8px", alignItems: "center"}}>
            <h2>{name}</h2>
            <p>Scale by X</p>
            <select value={scaleX} onChange={(event) => setScaleX(parseInt(event.target.value))}>
                <option defaultChecked={true} value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
            </select>
            <p>Scale by Y</p>
            <select value={scaleY} onChange={(event) => setScaleY(parseInt(event.target.value))}>
                <option defaultChecked={true} value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
            </select>
            <p>Rotate</p>
            <select value={corner} onChange={(event) => setCorner(parseInt(event.target.value))}>
                {renderOptions(corners)}
            </select>
            <input type={"range"} style={{minWidth: '150px'}} value={rotate} min={0} max={360} onChange={(event) => setRotate(event.target.value)}/>
            <p>{rotate}*</p>
            {/*<input value={rotate} placeholder={"Rotate Polygon"} type={"number"} onChange={(event) => setRotate(event.target.value)}/>*/}
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', "#FF007F"]} onChangeComplete={(color) => setStroke(color.hex)}/>
            <GithubPicker triangle={"hide"} width={150} colors={['#DB3E00', '#FCCB00', '#008B02','#1273DE', '#EB9694', '#660032']} onChangeComplete={(color) => setFill(color.hex)}/>
            <button type={"submit"}>Save</button>
        </form>
    );
}