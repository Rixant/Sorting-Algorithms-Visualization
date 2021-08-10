import React from 'react';
import {useState} from 'react';
import bubbleSort from '../Algorithms/BubbleSort';
import insertionSort from '../Algorithms/InsertionSort';
import selectionSort from '../Algorithms/SelectionSort';
import mergeSort from '../Algorithms/MergeSort';
import quickSort from '../Algorithms/QuickSort';


function Main(){

    // states
    const [arr, setArray] = useState([]);

    React.useEffect(() => {
       initializeArray()
      }, []);


    // remove existing bars, generate new array and convert them into bars
    function initializeArray(){
        destroyArray();
        for(let i = 0; i < 100; i++) {        
            var r = Math.floor(Math.random() * 100) + 1;
            // if(arr.indexOf(r) === -1) 
            arr.push(r);
            var bar = document.createElement('div');
            bar.className = 'bar'
            bar.style.height = Math.ceil(r/2) + "vh";
            // bar.style.width =  0.2+ "vh";
            // bar.style.color = "red";
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
        <div className="buttons-area">
            <div className="left-buttons">
                <button type="button" id="" className="btn btn-primary new-array" onClick={initializeArray} >New Array</button>
            </div>
            <div className="right-buttons">
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> bubbleSort(document.getElementsByClassName('bar'))} >Bubble sort</button>
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> insertionSort(document.getElementsByClassName('bar'))}>Insertion sort</button>
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> selectionSort(document.getElementsByClassName('bar'))} >Selection sort</button>
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> mergeSort(document.getElementsByClassName('bar'), 0,document.getElementsByClassName('bar').length - 1  )}  >Merge sort</button>
                <button type="button" className="btn btn-dark bubble sort" onClick={()=> quickSort(0,document.getElementsByClassName('bar').length - 1, document.getElementsByClassName('bar'))}  >Quick sort</button>
            </div>
        </div>
    </div>
    )//end return

}//end main function



export default Main;