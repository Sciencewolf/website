let arr: string[] = [
    "/images/download.png", 
    "/images/download2.png", 
    "/images/download3.png"
]

let count: number = 1

const getImages = () => {
    const getButton: any = document.getElementById('btn')
    let getImg: any = document.getElementById('pic') as HTMLImageElement | null

    console.log('getImages', count)

    getButton.onclick = () => {
        if(count >= arr.length){
            console.log("Error: Out of size")
            count = 0
        }
        let source: any = `${arr[count]}`
        console.log("Array", source)
        console.log(getImg, "Current src")
        if (getImg !== null){
            getImg.src = source
        }
        count++
    }
}