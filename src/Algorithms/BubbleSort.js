import swap from './swap';

export default async function bubbleSort(arrayBar){
    const delay = 1
    let n = arrayBar.length;
    console.log(n);
    // const arrayBar = document.getElementsByClassName('bar');


    for (var i = 0; i < (n-1); i++) {
        for (var j = 0; j < (n - i - 1); j++) {

            arrayBar[j].style.background = "red";
            arrayBar[j+1].style.background = "blue";
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
    console.log(arrayBar)


}