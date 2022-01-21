const MergeSort = (array, sortElement, resetElement, x) => {
    const node = document.querySelectorAll('.point');
    let num=0;
    const auxiliaryArray = array.slice();
	mergeSortHelper(array, 0, array.length-1, auxiliaryArray);
    
    function mergeSortHelper(array, startIdx, endIdx, auxiliaryArray){
        if(startIdx === endIdx) return;
        const middle = Math.floor((startIdx + endIdx)/2);
        mergeSortHelper(auxiliaryArray, startIdx, middle, array);
        mergeSortHelper(auxiliaryArray, middle+1, endIdx, array);
        doMerge(array, startIdx, middle, endIdx, auxiliaryArray);
    }

    function doMerge(array, startIdx, middle, endIdx, auxiliaryArray){
        let i= startIdx;
        let j= middle+1;
        let k= startIdx;
        while(i<=middle && j<=endIdx){
            if(auxiliaryArray[i]<=auxiliaryArray[j]){
                array[k++] = auxiliaryArray[i++];
                msort(k-1, array[k-1]);
            }
            else{
                array[k++] = auxiliaryArray[j++];
                msort(k-1, array[k-1]);
            }
        }
        while(i<=middle){
                array[k++] = auxiliaryArray[i++];
        }
        while(j<=endIdx){
                array[k++] = auxiliaryArray[j++];
        }
    }

    function msort(i, arrI){
        setTimeout(() => {
            node[i].style.bottom = `${arrI}px`;
        }, x*num++);
    }
    setTimeout(() => {
        sortElement.style.cursor = 'pointer';
        resetElement.style.cursor = 'pointer';
    }, x*num);
    return array;
}
 
export default MergeSort;