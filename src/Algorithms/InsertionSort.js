import swap from './swap';

export default async function insertionSort(arrayBar){
    
    const delay = 0;
    let n = arrayBar.length;
    console.log(n);

    
    for (let i = 1; i < n; i++) {

       let j = i-1;
       let key = parseInt(arrayBar[i].style.height);
       console.log(key)

       arrayBar[j+1].style.background = "yellow";
       arrayBar[j].style.background = "blue";
       await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(arrayBar[j].style.height) > key) {

            await swap(arrayBar[j+1], arrayBar[j]);

            arrayBar[j+1].style.background = "darkgreen";
            arrayBar[j].style.background = "darkgreen";
            await new Promise(resolve => setTimeout(resolve, delay));

            j--;
        }}
    
    
}