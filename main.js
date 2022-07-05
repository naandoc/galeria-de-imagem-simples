const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic4.jpg", "/images/pic5.jpg"]

/* Looping through images */
const throughImages = document.querySelector(".thumb-bar")
for (let i = 0; i < images.length; i++) {
    let image = document.createElement("img")
    image.setAttribute("src", images[i])

    throughImages.appendChild(image)

    // newImage.setAttribute('src', xxx);
    const displayedImage = document.querySelector(".displayed-img")

    image.addEventListener("click", () => {
        displayedImage.setAttribute("src", images[i])
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => imageDarken())

let imageDarkenActive = false
const imageDarken = () => {
    if (!imageDarkenActive) {
        overlay.style.backgroundColor = "rgba(0,0,0,.6)"

        imageDarkenActive = true

        return
    }

    if (imageDarkenActive) {
        overlay.style.backgroundColor = "rgba(0,0,0,0)"
        imageDarkenActive = false
    }
}