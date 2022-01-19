// on click add active class..remove active class from other element
var e = document.querySelector("#m1")
var oe = document.querySelector("#m2")
let color1 = document.querySelector(".mountain1") 
let color2 = document.querySelector(".mountain2")
let bgImage = document.querySelector(".schedule-img")

bgImage.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/0/01/Alp_mountains_covered_with_snow.jpg')"

var switcher = () => {

    if (bgImage.style.backgroundImage == "url('https://upload.wikimedia.org/wikipedia/commons/0/01/Alp_mountains_covered_with_snow.jpg')") {
        bgImage.style.backgroundImage = "url('https://www.ocregister.com/wp-content/uploads/2018/12/OCR-L-SNOW-1208-001-MR_27931197-1.jpg?w=1714')"
        console.log(bgImage.style.backgroundImage)
    } else if (bgImage.style.backgroundImage == "url('https://www.ocregister.com/wp-content/uploads/2018/12/OCR-L-SNOW-1208-001-MR_27931197-1.jpg?w=1714')") {
        bgImage.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/0/01/Alp_mountains_covered_with_snow.jpg')"
    }

    if (e.classList == "active") {
        e.classList.toggle("active")
        e.classList.toggle("nonactive")
        color1.style.color = "grey"
    } else if (e.classList == "nonactive") {
        e.classList.toggle("nonactive")
        e.classList.toggle("active")
        color1.style.color = "darkslategrey"
    }
    if (oe.classList == "active") {
        oe.classList.toggle("active")
        oe.classList.toggle("nonactive")
        color2.style.color = "grey"
    } else if (oe.classList == "nonactive") {
        oe.classList.toggle("nonactive")
        oe.classList.toggle("active")
        color2.style.color = "darkslategrey"
    }
}