let arr: string[] = [
    "/images/download.png", 
    "/images/download2.png", 
    "/images/download3.png"
]

let count: number = 1

const getImages = () => {
    const getButton: any = document.getElementById('btn')
    let getImg: any = document.getElementById('pic') as HTMLImageElement | null

    getButton.onclick = () => {
        if(count >= arr.length){
            // console.log("Error: Out of size")
            count = 0
        }
        let img_source: any = `${arr[count]}`
        if (getImg !== null){
            getImg.src = img_source
        }
        count++
    }
}