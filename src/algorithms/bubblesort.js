import swap from "./utility";

const BubbleSort = (array, sortElement, resetElement) => {
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
            }, 0);
        } else{
            setTimeout(() => {
                sortElement.style.cursor = 'pointer';
                resetElement.style.cursor = 'pointer';
            }, 0);
        }
    }
    setTimeout(() => {
        bsort()
    }, 0);
    
	return array;
}
 
export default BubbleSort;
