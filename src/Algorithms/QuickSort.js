import swap from './swap';

const delay= 0;


async function partition(start, end, array){
    
    await new Promise(resolve => setTimeout(resolve, delay));
    var pivot   =  await array[Math.floor((start + end) / 2)].style.height,
    left = start,
    right = end;

    while (left <= right){
         
        while (array[left].style.height < pivot){
            await new Promise(resolve => setTimeout(resolve, delay));
            left ++;
        }

        while (array[right].style.height > pivot){
            await new Promise(resolve => setTimeout(resolve, delay));
            right --;
        }

        if(left <= right){
            await new Promise(resolve => setTimeout(resolve, delay));
            await swap(array[left], array[right])
            left++;
            right--;
        }
    }

    return left; 
}
     

export default async function quickSort(start, end, arrayBar){

    var index;

    if (arrayBar.length > 1) {

        await new Promise(resolve => setTimeout(resolve, delay));
        index =  await partition(start, end, arrayBar);

        if (start < index - 1) { 
            await new Promise(resolve => setTimeout(resolve, delay));
            await quickSort(start, index - 1, arrayBar);
        }

        if (index < end) {
            await new Promise(resolve => setTimeout(resolve, delay));
            await quickSort(index, end, arrayBar);

        }
    }


  
   
}
