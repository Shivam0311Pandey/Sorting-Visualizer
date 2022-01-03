import { useState, useEffect } from "react";

const useArr = () => {
    
    const navBody = document.querySelector('#nav-body');
    const[navHeight, setNavHeight] = useState(navBody.offsetHeight);
    const[navWidth, setNavWidth] = useState(navBody.offsetWidth);
    const[size, setSize] = useState(12500);
    const[arr, setArr] = useState([]);
    const[incrementY, setIncrementY] =  useState((window.innerHeight - navHeight)/size);
    const[incrementX, setIncrementX] =  useState((window.innerWidth - navWidth)/size);

    const createArr = () =>{
        const newArr = [];
        for(let i=0; i<size; i++){
            newArr.push(i*incrementY);
        }
        setArr(newArr);
    }
    createArr();
    let flag;
    window.onresize = () =>{
        clearTimeout(flag);
        flag = setTimeout(()=>{
            setNavHeight(navBody.offsetHeight);
            setNavWidth(navBody.offsetWidth);
            if(window.innerHeight !== incrementY){
                setIncrementY(window.innerHeight);
                createArr();
            }
            if(window.innerWidth != incrementX){
                setIncrementX(window.innerWidth);
            }
        }, 500);
    };


    return { arr, incrementX};
}
 
export default useArr;