let count = 0

const arr = new Array(3);
    arr[0] = "https://raw.githubusercontent.com/Sciencewolf/website/master/download.png"
    arr[1] = "https://raw.githubusercontent.com/Sciencewolf/website/master/download2.png"
    arr[2] = "https://raw.githubusercontent.com/Sciencewolf/website/master/download3.png"


const changeImages = () => {
    console.log('Begin of func', count)

    if(count > arr.length) {
        console.log("error: RangeError ")

        count = 0
        return
    }

    const getBtnID = document.getElementById('btn')
    const getClassName = document.querySelector('.main')
    let imgTag = document.getElementById('pic')

    getBtnID.addEventListener("click", function() {
        let str = `${arr[count]}`
        console.log(`Before ${str}`, count)
        imgTag.src = str.replace(`${arr[count]}`, `${arr[count + 1]}`)
        console.log(`After ${str}`, count)
        count++;
    });
}