import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const useArr = () => {    
    
    const[size, setSize] = useState(12500);
    const[arr, setArr] = useState([]);
    const[incrementX, setIncrementX] =  useState(window.innerWidth/size);
    const[height, setHeight] = useState(window.innerHeight);
    const[width, setWidth] = useState(window.innerWidth);
    const[navHeight, setNavHeight] = useState(null);
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        const nodeHeight= ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight;
        setNavHeight(ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight);
        const incrementY = (height- nodeHeight)/size; 
        createArr(incrementY);
    }, []);

    const createArr = (incrementY) =>{

        const newArr = [];
        for(let i=0; i<size; i++){
            newArr.push(i*incrementY);
        }
        console.log(newArr);
        setArr(newArr);
    }

    window.onload = () =>{
        if(window.innerHeight !== height){
            setHeight(window.innerHeight);
            const incrementY = (window.innerWidth - navHeight)/size;
            createArr(incrementY);
        }
        if(window.innerWidth !== width){
            setWidth(window.innerWidth);
            setIncrementX(window.innerWidth/size);
        }
    };

    return { arr, incrementX, height };
}
export default useArr;