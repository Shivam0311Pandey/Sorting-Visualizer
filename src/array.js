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

    let shuffledArr = [];

    useEffect(() => {
        const nodeHeight= ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight;
        //setNavHeight(ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight);
        const incY = (height- nodeHeight-3.5)/size; 
        setIncrementY((height- nodeHeight-0.1)/size);
        ReactDOM.findDOMNode(document.getElementById('reset')).onclick = () => shuffle();
        createArr(incY);
    }, []);

    const createArr = (incY) =>{

        const newArr = [];
        for(let i=0; i<size; i++){
            newArr.push(i*incY);
        }
        setArr(newArr);
        shuffledArr = newArr;
    }

    const shuffle = () =>{
        const newArr = shuffledArr;
        let idx= newArr.length, temp, index;
        console.log(idx);
        const node = document.querySelectorAll('.point');
        console.log(node[idx-1]);
        console.log(node[0]);
        while(idx>0){
            index = Math.floor(Math.random()*idx);
            idx--;
            temp = newArr[idx];
            newArr[idx] = newArr[index];
            newArr[index] = temp;
            function func(i, idx){
                setTimeout(() => {
                    i.style.bottom = `${newArr[idx]}px`;
                }, (size-idx)*0.000000000001);
            }
            func( node[idx], idx);
           
        }
        shuffledArr = newArr;
        console.log('hello');
    }

    return { arr, incrementX, size, width, incrementY };
}
export default useArr;