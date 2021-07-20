

export default async function mergeSort(arrayBar, l, r){
    const delay = 0;
    let n = arrayBar.length;
    console.log(n);
    // const arrayBar = document.getElementsByClassName('bar');

    
    if(l>=r){
        return;
    }

    await new Promise(resolve => setTimeout(resolve, delay));
    var m =l+ parseInt((r-l)/2);

    await new Promise(resolve => setTimeout(resolve, delay));
    await mergeSort(arrayBar,l,m);

    await new Promise(resolve => setTimeout(resolve, delay));
    await mergeSort(arrayBar,m+1,r);

    await new Promise(resolve => setTimeout(resolve, delay));
    await merge(arrayBar,l,m,r);


}



async function merge(arr, l, m, r){
    const delay = 0;
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = new Array(n1);
    var R = new Array(n2);
 
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i].style.height;

    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j].style.height;
 
    var i = 0;

    var j = 0;

    var k = l;


    while (i < n1 && j < n2) {
        if (parseInt(L[i]) <= parseInt(R[j])) {
            arr[k].style.height = L[i];
            i++;
        }
        else {
            arr[k].style.height = R[j];
            j++;
        }
        k++;
    }
 
    while (i < n1) {
        arr[k].style.height = L[i];
        i++;
        k++;
    }
 

    while (j < n2) {
        arr[k].style.height = R[j];
        j++;
        k++;
    }
    
    

}