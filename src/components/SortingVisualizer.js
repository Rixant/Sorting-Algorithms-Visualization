import React from 'react';
import {useState} from 'react';
import bubbleSort from '../Algorithms/BubbleSort'


function SortingVisualizer(){

    // states
    const [arr, setArray] = useState([]);


    // remove existing bars, generate new array and convert them into bars
    function initializeArray(){
        destroyArray();
        for(let i = 0; i < 100; i++) {        
            var r = Math.floor(Math.random() * 100) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
            var bar = document.createElement('div');
            bar.className = 'bar'
            bar.style.height = r/2 + "vh";
            bar.style.color = "red";
            document.querySelector('.canvas').appendChild(bar);
        }
        setArray(arr);
        console.log(arr);
    }//end initializeArray



    // remove all the existing old bars 
    function destroyArray(){
        document.querySelectorAll(".bar").forEach((node) => {
            node.remove();
        });
    }//end destroyArray


    //return
    return(
        <div className="container-fluid">
        <div className="header">
            <h1>Sorting Visualizer</h1>
        </div>

        <div className="canvas">
         
        </div>

        <div className="sort-buttons">
            <div className="left-buttons">
                <button type="button" id="" className="btn btn-primary new-array" onClick={initializeArray} >New Array</button>
            </div>
            <div className="right-buttons">
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> bubbleSort(arr)} >Bubble sort</button>
                <button type="button" className="btn btn-dark bubble sort" >Insertion sort</button>
                <button type="button" className="btn btn-dark bubble sort" >Selection sort</button>
                <button type="button" className="btn btn-dark bubble sort" >Merge sort</button>
            </div>
        </div>
    </div>
    )//end return

}//end main function



export default SortingVisualizer;