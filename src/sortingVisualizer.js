import { useState } from "react";
import useArr from "./array";

const SortingVisualizer = () => {
//arr, incrementX,
    const { arr, incrementX, size, width, incrementY } = useArr();
    console.log(`incrementX: ${incrementX}, width: ${width}`);
    console.log(arr[1]);

    const colorArr = ['red', 'green', 'blue'];
    
    function randomColor(){
        return Math.floor(Math.random * 4);
    }

    return (
        <div className="sorting" style={{ minHeight: `${incrementY*size}px` }}>
             { arr.map( (i, idx) => (
        <div className="point"  style={{bottom: `${i}px`, left: `${idx*incrementX}px`, backgroundColor: 'white'}} key={idx}></div>
         ))}
        </div>
    );
}

export default SortingVisualizer;