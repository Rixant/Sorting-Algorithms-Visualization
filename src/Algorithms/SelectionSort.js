import swap from './swap';

export default async function selectionSort(arrayBar){
    const delay = 0;
    let n = arrayBar.length;

    for(let i = 0; i < n-1 ; i++){
        let min_idx = i;
        await new Promise(resolve => setTimeout(resolve, delay));
        for (let j = i+1; j < n; j++)
        {
            arrayBar[i].style.background = "yellow";
            arrayBar[j].style.background = "blue";
            await new Promise(resolve => setTimeout(resolve, delay));
            if((parseInt(arrayBar[j].style.height) < parseInt(arrayBar[min_idx].style.height))){
                min_idx = j;
                arrayBar[min_idx].style.background = "red";
                await new Promise(resolve => setTimeout(resolve, delay));
   
            }

            arrayBar[j].style.background = "darkgreen";
            await new Promise(resolve => setTimeout(resolve, delay));

        }
        swap(arrayBar[i],arrayBar[min_idx]);
        arrayBar[min_idx].style.background = "darkgreen";
        arrayBar[i].style.background = "darkgreen";
        await new Promise(resolve => setTimeout(resolve, delay));
    }


}