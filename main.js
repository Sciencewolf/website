"use strict";
let arr = [
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download.png",
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download2.png",
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download3.png"
];
let count = 1;
const getImages = () => {
    const getButton = document.getElementById('btn');
    let getImg = document.getElementById('pic');
    console.log('getImages', count);
    getButton.onclick = () => {
        if (count >= arr.length) {
            console.log("Error: Out of size");
            count = 0;
        }
        let source = `${arr[count]}`;
        console.log("Array", source);
        console.log(getImg, "Current src");
        if (getImg !== null) {
            getImg.src = source;
        }
        count++;
    };
};
