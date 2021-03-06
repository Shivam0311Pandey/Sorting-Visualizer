import swap from "./utility";

const BubbleSort = (array, sortElement, resetElement, x) => {
    let num=0;
    let isSorted = false;
	let i=0;
    const node = document.querySelectorAll('.point');
    function bsort(){
        isSorted = true;
        for(let j=0; j<array.length-1-i; j++){
            if(array[j]>array[j+1]){
                swap(j, j+1, array);
                isSorted= false;
                node[j].style.bottom = `${array[j]}px`;
                node[j+1].style.bottom = `${array[j+1]}px`;
            }
        }
        i++; 
        if(!isSorted){
            setTimeout(() => {
                bsort();  
            }, x*num++);
        } else{
            setTimeout(() => {
                sortElement.style.cursor = 'pointer';
                resetElement.style.cursor = 'pointer';
            }, x*num);
        }
    }
    setTimeout(() => {
        bsort()
    }, x*num++);
    
	return array;
}
 
export default BubbleSort;
