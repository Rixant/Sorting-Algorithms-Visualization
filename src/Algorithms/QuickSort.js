import swap from './swap';

const delay= 0;


async function partition(start, end, array){
    
    var pivot   =  await array[Math.floor((start + end) / 2)].style.height,
    left = start,
    right = end;

    while (left <= right){
         
        while (array[left].style.height < pivot){
            left ++;
        }

        while (array[right].style.height > pivot){
            right --;
        }

        if(left <= right){
            swap(array[left], array[right])
            left++;
            right--;
        }
    }

    return left;
   
}
     

export default async function quickSort(start, end, arrayBar){
    console.log(arrayBar.length);

    var index;

    if (arrayBar.length > 1) {

        index =  await partition(start, end, arrayBar);

        if (start < index - 1) { 
            await quickSort(start, index - 1, arrayBar);
        }

        if (index < end) {
            await quickSort(index, end, arrayBar);
        }
    }


  
   
}
