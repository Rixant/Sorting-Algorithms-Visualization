import swap from './swap';

export default async function selectionSort(arrayBar){
    const delay = 0;
    let n = arrayBar.length;

    for(let i = 0; i < n-1 ; i++){
        let min_idx = i;
        await new Promise(resolve => setTimeout(resolve, delay));
        for (let j = i+1; j < n; j++)
        {
            await new Promise(resolve => setTimeout(resolve, delay));
            if((parseInt(arrayBar[j].style.height) < parseInt(arrayBar[min_idx].style.height))){
                min_idx = j;
                await new Promise(resolve => setTimeout(resolve, delay));
   
            }

        }
        swap(arrayBar[i],arrayBar[min_idx]);
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    console.log('sj');
    console.log(arrayBar);


   


}