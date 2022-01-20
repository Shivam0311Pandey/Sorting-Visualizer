import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import  BubbleSort from "./algorithms/bubblesort"
import HeapSort from "./algorithms/heapsort";
import QuickSort from "./algorithms/quicksort";


const useArr = () => {    
    const[arr, setArr] = useState([]);
    const size = window.innerWidth>768? 12500: window.innerWidth>426? 5000:2500;
    const incrementX =  (window.innerWidth-3)/size;
    const height = window.innerHeight;
    const [incrementY, setIncrementY] = useState(null);
    
    let shuffledArr = [];

    useEffect(() => {
        const nodeHeight= ReactDOM.findDOMNode(document.getElementById('nav-body')).offsetHeight;
        const sortElement = ReactDOM.findDOMNode(document.getElementById('sort'));
        const resetElement = ReactDOM.findDOMNode(document.getElementById('reset'));
        const incY = (height- nodeHeight-3.5)/size; 
        setIncrementY((height- nodeHeight-0.1)/size);
        createArr(incY);

        resetElement.onclick = () => {
            if(resetElement.style.cursor === 'pointer'){
                sortElement.style.cursor = 'default';
                shuffle();
            }
            
        };
        sortElement.onclick = (e) => {
            let sortalgo = e.target.getAttribute("data-sortalgo");
            if(sortalgo === 'Choose'){
                alert('Choose a sorting algorithm from dropdown!');
            }
            else if(sortElement.style.cursor === 'pointer'){
                sortElement.style.cursor = 'default';
                resetElement.style.cursor = 'default';
                sortalgo = sortalgo.replace(/ +/g, "");
                console.log('hello');
                if(sortalgo === "BubbleSort")
                    shuffledArr = BubbleSort(shuffledArr);
                else if(sortalgo === "QuickSort")
                    shuffledArr = QuickSort(shuffledArr, size);
                else if(sortalgo === "HeapSort")
                    shuffledArr = HeapSort(shuffledArr, size);
                setTimeout(() => {
                    sortElement.style.cursor = 'pointer';
                    resetElement.style.cursor = 'pointer';
                }, 0);
            }
        };
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
        const node = document.querySelectorAll('.point');
        function req(){
            let i=0;
            while(i<(size/25)){
                index = Math.floor(Math.random()*idx);
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
            } else{
                setTimeout(() => {
                    ReactDOM.findDOMNode(document.getElementById('sort')).style.cursor = 'pointer';                                    
                }, 0);
            }
        }
        requestAnimationFrame(req);
        
    }

    return { arr, incrementX, size, incrementY };
}
export default useArr;