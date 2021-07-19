import React from 'react';

const delay = 1;

export default async function swap(el1,el2)
{

    // change the color of the bar to be swapped to red
    el1.style.background = "#f00000";
    el2.style.background = "#f00000";
    await new Promise(resolve => setTimeout(resolve, delay));

    // get the height of the bars
    let heightBar1 = el1.style.height;
    let heightBar2 = el2.style.height;

    // swapping the height
    el1.style.height = heightBar2;
    el2.style.height = heightBar1;
    await new Promise(resolve => setTimeout(resolve, delay));

}