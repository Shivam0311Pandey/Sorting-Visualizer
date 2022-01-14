import swap from "./utility";

const HeapSort = (array) => {
    const node = document.querySelectorAll('.point');
    buildMaxHeap(array);
    for(let i=array.length-1; i>0; i--){
        swap(0, i, array);
        hsort(0, i, array[0], array[i]);
        shiftDown(array, 0, i-1);
    }

    function hsort(firstIdx, secondIdx, arrayFirst, arraySecond){
        setTimeout(()=>{
            node[firstIdx].style.bottom = `${arrayFirst}px`;
            node[secondIdx].style.bottom = `${arraySecond}px`;
        }, 0);
    }
      
    function buildMaxHeap(array){
        const lastParent = Math.floor((array.length-2)/2);
        for(let currentIdx = lastParent; currentIdx>=0; currentIdx--){
            shiftDown(array, currentIdx, array.length-1)
        }
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
                hsort(toSwapIdx, currentIdx, array[toSwapIdx], array[currentIdx]);
                currentIdx = toSwapIdx;
                childOneIdx = currentIdx*2+1;
            } 
            else{
                return;
            }
        }
    } 
    return array;
}
 
export default HeapSort;

// function swap(){
    
// }