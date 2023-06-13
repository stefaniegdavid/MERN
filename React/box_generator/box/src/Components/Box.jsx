import React, { useState } from 'react'
import '../App.css'

const Box = () => {
    let [color, setColor] = useState("");
    let [width, setWidth] = useState("");
    let [height, setHeight] = useState("");

    const [allBoxes, setAllBoxes] = useState([]);

    const createBox = (e) => {
        e.preventDefault();
        let boxObj = { color, width, height }
        setAllBoxes([...allBoxes, boxObj]);
        setColor("");
        setHeight("");
        setWidth("");
    }

    return (
        <div>
            <label htmlFor="color"> Color:  </label>
            <input type="color" name='color' onChange={(e) => setColor(e.target.value)} value={color} />
            <label htmlFor="width"> Width:  </label>
            <input type="number" name='width' onChange={(e) => setWidth(e.target.value)} value={width} />
            <label htmlFor="height"> Height:  </label>
            <input type="number" name='height' onChange={(e) => setHeight(e.target.value)} value={height} />
            <button onClick={createBox}>Add</button>
            <div className='box-container' style={{display:'flex'}}>
                {allBoxes.map((b, i) => {
                    return (
                        <div key={i} style={{backgroundColor: b.color, width: b.width + "px", height: b.height + "px" }}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Box