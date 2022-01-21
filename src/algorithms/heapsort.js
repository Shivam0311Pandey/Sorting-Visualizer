import swap from "./utility";

const HeapSort = (array, sortElement, resetElement, x) => {
    const node = document.querySelectorAll('.point');
    let num=0;
    buildMaxHeap(array);
    for(let i=array.length-1; i>0; i--){
        swap(0, i, array);
        nsort(0, i, array[0], array[i]);
        shiftDown(array, 0, i-1);
    }
      
    function buildMaxHeap(array){
        const lastParent = Math.floor((array.length-2)/2);
        for(let currentIdx = lastParent; currentIdx>=0; currentIdx--){
            shiftDown(array, currentIdx, array.length-1)
        }
    }
     
    function nsort(i, j, arrI, arrJ){
        setTimeout(()=>{
            node[i].style.bottom = `${arrI}px`;
            node[j].style.bottom = `${arrJ}px`;
        }, x*num++);
    }

    function shiftDown(array, currentIdx, endIdx){
        let childOneIdx = currentIdx*2+1;
        while(childOneIdx <= endIdx){
            const childTwoIdx = currentIdx*2+2 <= endIdx?currentIdx*2+2:-1;
            let toSwapIdx;
            if(childTwoIdx !== -1 && array[childTwoIdx]>array[childOneIdx]){
                toSwapIdx = childTwoIdx;
            } 
            else{
                toSwapIdx = childOneIdx;
            }
            if(array[toSwapIdx]>array[currentIdx]){
                swap(toSwapIdx, currentIdx, array);
                nsort(toSwapIdx, currentIdx, array[toSwapIdx], array[currentIdx]);
                currentIdx = toSwapIdx;
                childOneIdx = currentIdx*2+1;
            } 
            else{
                return;
            }
        }
    }
    setTimeout(() => {
        sortElement.style.cursor = 'pointer';
        resetElement.style.cursor = 'pointer';
    }, x*num);
    return array;
}
 
export default HeapSort;