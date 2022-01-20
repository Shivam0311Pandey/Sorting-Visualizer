import useArr from "./array";

const SortingVisualizer = () => {
    const { arr, incrementX, size, incrementY } = useArr();
    
    const colorArr = ['red', 'blue', 'yellow', 'lightblue', 'green', 'maroon', 'lightgreen'];
    

    return (
        <div className="sorting" style={{ minHeight: `${incrementY*size}px` }}>
             { arr.map( (i, idx) => (
        <div className="point" id={`${idx}`} style={{bottom: `${i}px`, left: `${idx*incrementX}px`, backgroundColor: colorArr[idx%7]}} key={idx}></div>
         ))}
        </div>
    );
}

export default SortingVisualizer;