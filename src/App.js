import React from 'react';
import {create_bars} from './services/process';


function App() {
  return (
    <div class="container-fluid">
        <div class="header">
            <h1>Sorting Visualizer</h1>
        </div>

        <div class="canvas">
          <create_bars />
    
        </div>

        <div class="sort-buttons">
            <div class="left-buttons">
                <button type="button" id="" class="btn btn-primary new-array" >New Array</button>
            </div>
            <div class="right-buttons">
                <button type="button" class="btn btn-dark bubble sort" >Bubble sort</button>
                <button type="button" class="btn btn-dark bubble sort" >Insertion sort</button>
                <button type="button" class="btn btn-dark bubble sort" >Selection sort</button>
                <button type="button" class="btn btn-dark bubble sort" >Merge sort</button>
            </div>
        </div>
    </div>
  );
}

export default App;
