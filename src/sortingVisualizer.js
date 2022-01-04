import { useState } from "react";
import useArr from "./array";

const SortingVisualizer = () => {
//arr, incrementX,
    const { arr, incrementX, height } = useArr();
    console.log(arr);
    console.log(incrementX);
    // { arr.map( i => (
    //     <div className="point" style={{bottom: `${i}px`}}>.</div>
    // ))}
    return (
        <div className="sorting">
            <h1>hello</h1>
        </div>
    );
}

export default SortingVisualizer;