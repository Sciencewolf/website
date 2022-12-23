let arr: string[] = [
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download.png", 
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download2.png", 
    "https://raw.githubusercontent.com/Sciencewolf/website/master/download3.png"
]

let count: number = 0

const getImages = () => {
    let getImg: any = document.getElementById('pic') as HTMLImageElement | null
    const getButton: any = document.getElementById('btn')

    console.log('getImages', count)

    if(count > arr.length){
        console.log("Error: Out of size")
        count = 0
    }

    getButton.addEventListener("click", () => {
        let source: any = `${arr[count]}`
        console.log("Array", source)
        console.log(getImg, "Current src")
        if (getImg != null){
            getImg.src = source
        }

    })
    count++

}