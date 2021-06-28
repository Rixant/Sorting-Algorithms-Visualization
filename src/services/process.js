import React from 'react';


function create_bars(){
    var arr = [];
    for(i = 0; i < 100; i++) {        
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        var bar = document.createElement('div');
        bar.className = 'bar'
        bar.style.height = r/2 + "vh";
        bar.style.color = "red";
        document.querySelector('.canvas').appendChild(bar);
        }
    console.log(arr);

}



function removeBars() {
    if(el){
        arr=[];
    el.parentNode.removeChild(el);
    }
}


var el = document.querySelector(".new-array")
    
    el.addEventListener("click", () => {
        create_bars();
    });



export default create_bars;











