import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const useArr = () => {    
    
    const[size, setSize] = useState(12500);
    const[arr, setArr] = useState([]);
    const[incrementX, setIncrementX] =  useState((window.innerWidth-3)/size);
    const[height, setHeight] = useState(window.innerHeight);
    const[width, setWidth] = useState(window.innerWidth);
    //const[navHeight, setNavHeight] = useState(null);
    const [incrementY, setIncrementY] = useState(null);

    useEffect(() => {
        const nodeHeight= ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight;
        //setNavHeight(ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight);
        const incY = (height- nodeHeight-3.5)/size; 
        setIncrementY((height- nodeHeight-0.1)/size);
        createArr(incY);
    }, []);

    const createArr = (incY) =>{

        const newArr = [];
        for(let i=0; i<size; i++){
            newArr.push(i*incY);
        }
        console.log(newArr);
        setArr(newArr);
        shuffle(newArr);
    }

    const shuffle = (newArr) =>{
        let idx= newArr.length, temp, index;
        while(idx>0){
            index = Math.floor(Math.random()*idx);
            temp = newArr[idx];
            newArr[idx] = newArr[index];
            newArr[index] = temp;
            idx--;
        }
        setArr(newArr);
    }

    return { arr, incrementX, size, width, incrementY };
}
export default useArr;