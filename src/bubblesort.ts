import React from 'react';

const sleep = (ms: number) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
};

export const bubbleSort = async (arr: number[], setArr: React.Dispatch<React.SetStateAction<number[]>>): Promise<void> => {
    const sortedArr: number[] = [...arr];
    
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j+1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
            setArr([...sortedArr]);
            await sleep(20);
        }
    }
};