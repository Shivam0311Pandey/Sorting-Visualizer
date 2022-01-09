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
        let idx= shuffledArr.length, temp, index;
        console.log(idx);
        const node = document.querySelectorAll('.point');
        console.log(node[idx-1]);
        console.log(node[0]);
        function req(){
            let start = Date.now(); 
            while(Date.now()-start<0.1){
            }
            let i=0;
            while(i<500){
            let index = Math.floor(Math.random()*idx);
            idx--;
            temp = shuffledArr[idx];
            shuffledArr[idx] = shuffledArr[index];  
            shuffledArr[index] = temp;
            node[idx].style.bottom = `${shuffledArr[idx]}px`;
            node[index].style.bottom = `${shuffledArr[index]}px`;
            i++;
            }
            if(idx>0){
                requestAnimationFrame(req);
            }
        }
        requestAnimationFrame(req);
    }

    return { arr, incrementX, size, width, incrementY };
}
export default useArr;