"use strict";
let arr = [
    "/images/download.png",
    "/images/download2.png",
    "/images/download3.png"
];
let count = 1;
const getImages = () => {
    const getButton = document.getElementById('btn');
    let getImg = document.getElementById('pic');
    getButton.onclick = () => {
        if (count >= arr.length) {
            // console.log("Error: Out of size")
            count = 0;
        }
        let img_source = `${arr[count]}`;
        if (getImg !== null) {
            getImg.src = img_source;
        }
        count++;
    };
};
const sendEmail = () => {
};
