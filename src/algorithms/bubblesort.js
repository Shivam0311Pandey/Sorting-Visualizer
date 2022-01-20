import swap from "./utility";

const BubbleSort = (array) => {
    let isSorted = false;
	let i=0;
    console.log(array);
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
        requestAnimationFrame(bsort);
       }
    }
    requestAnimationFrame(bsort);
	return array;
}
 
export default BubbleSort;
