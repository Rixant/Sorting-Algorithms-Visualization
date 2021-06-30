import swap from './swap';

export default async function bubbleSort(arr){
    var delay = 0;
    let n = arr.length;
    const arrayBar = document.getElementsByClassName('bar');

    for (let i = n-1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {

            arrayBar[j].style.background = "red";
            arrayBar[j+1].style.background = "red";
            await new Promise(resolve => setTimeout(resolve, delay));

            if (parseInt(arrayBar[j].style.height) > parseInt(arrayBar[j+1].style.height)) {
                await swap(arrayBar[j], arrayBar[j+1]);
            }

            arrayBar[j].style.background = "darkgreen";
            arrayBar[j+1].style.background = "darkgreen";
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        arrayBar[i].style.background = "darkgreen";
        await new Promise(resolve => setTimeout(resolve, delay));
    }


}