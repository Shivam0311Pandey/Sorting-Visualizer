import swap from "./utility";

const QuickSort = (array, sortElement, resetElement, x) => {
    const node = document.querySelectorAll('.point');
    let num=0;
    quickSortHelper(array, 0, array.length-1);
    
    function quickSortHelper(array, startIdx, endIdx){
        if(startIdx >= endIdx){
            return;
        } 
        const pivot = startIdx;
        let leftIdx = startIdx+1;
        let rightIdx = endIdx;
        while(leftIdx <= rightIdx){
            if(array[leftIdx]>array[pivot] && array[rightIdx]<array[pivot]){
                swap(leftIdx, rightIdx, array);
                nsort(leftIdx, rightIdx, array[leftIdx], array[rightIdx]);   
            }
            if(array[leftIdx] <= array[pivot]) leftIdx++;
            if(array[rightIdx] >= array[pivot]) rightIdx--;	
        }
        swap(pivot, rightIdx, array);
        nsort(pivot, rightIdx, array[pivot], array[rightIdx]);
        const isLeftSmaller = rightIdx-1-startIdx < endIdx-(1+rightIdx);
        if(isLeftSmaller){
            quickSortHelper(array, startIdx, rightIdx-1);
            quickSortHelper(array, rightIdx+1, endIdx);
        }
        else{
            quickSortHelper(array, rightIdx+1, endIdx);
            quickSortHelper(array, startIdx, rightIdx-1);
        }
    }
    function nsort(i, j, arrI, arrJ){
        setTimeout(()=>{
            node[i].style.bottom = `${arrI}px`;
            node[j].style.bottom = `${arrJ}px`;
        }, x*num++);
    }
    setTimeout(() => {
        sortElement.style.cursor = 'pointer';
        resetElement.style.cursor = 'pointer';
    }, x*num);  
    return array;
}
 
export default QuickSort;