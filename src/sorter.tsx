import { useState } from 'react';
import { bubbleSort } from './bubblesort';

const Sorter = () => {
    const [freq] = useState(50);

    const randomValueInRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const [arr, setArr] = useState<number[]>(() => {
        const temp: number[] = [];
        for (let i = 0; i < 50; i++) {
            temp.push(randomValueInRange(5, 500));
        }
        return temp;
    });
    
    const resetArray = () => {
        const temp: number[] = [];
        for (let i = 0; i < freq; i++) {
            temp.push(randomValueInRange(5, 500));
        }
        setArr(temp);
    };

    return(
        <>
        <div className="container">
            <div className="columns">
                {arr.map((c, i) => {
                    return(
                        <div key={i}
                        style={{height: `${c}px`}}
                        className="bar"/>
                    )
                })}
            </div>
        </div>
        <div className="container">
            <button className="resetButton" onClick={resetArray} >Reset</button>
            <button className="sortButton" onClick={() => {bubbleSort(arr, setArr)}}>Bubble Sort</button>
        </div>
        </>
    );
};

export default Sorter;