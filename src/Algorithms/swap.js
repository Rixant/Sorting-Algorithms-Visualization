import React from 'react';

const delay = 0;

export default async function swap(el1,el2)
{

    el1.style.background = "darkgreen";
    el2.style.background = "darkgreen";
  
    let heightBar1 = el1.style.height;
    let heightBar2 = el2.style.height;

    el1.style.height = heightBar2;
    el2.style.height = heightBar1;


}