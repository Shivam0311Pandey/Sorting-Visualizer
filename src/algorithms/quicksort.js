const QuickSort = (array) => {
    
    const node = document.querySelectorAll('.point');
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
                qsort(leftIdx, rightIdx, array[leftIdx], array[rightIdx]);    
            }
            if(array[leftIdx] <= array[pivot]) leftIdx++;
            if(array[rightIdx] >= array[pivot]) rightIdx--;	
        }
        swap(pivot, rightIdx, array);
        qsort(pivot, rightIdx, array[pivot], array[rightIdx]);
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
    function qsort(firstIdx, secondIdx, arrayFirst, arraySecond){
        setTimeout(()=>{
            node[firstIdx].style.bottom = `${arrayFirst}px`;
            node[secondIdx].style.bottom = `${arraySecond}px`;
        }, 0);
    }

    
    return array;
}
 
export default QuickSort;

function swap(i, j, array){
    const temp = array[i];
    array[i]=array[j];
    array[j]=temp;
}