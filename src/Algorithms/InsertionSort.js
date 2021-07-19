import swap from './swap';

export default async function insertionSort(arrayBar){
    
    const delay = 5;
    let n = arrayBar.length;
    console.log(n);

    
    for (let i = 1; i < n; i++) {

       let j = i-1;
       let key = parseInt(arrayBar[i].style.height);
       console.log(key)

       // change the color of the bar to be compared to blue
       arrayBar[j+1].style.background = "#0072ff";
       arrayBar[j].style.background = "#0072ff";
       await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(arrayBar[j].style.height) > key) {

            await swap(arrayBar[j+1], arrayBar[j]);

            // change color back to normal
            arrayBar[j+1].style.background = "#ffd000";
            arrayBar[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            j--;
        }}
    
    
}