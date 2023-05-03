console.log("Start");

document.querySelectorAll('.container .imageContainer .image img').forEach((image1) => {
    image1.onclick = () => {
        console.log("Open");
        document.querySelector('.openImage').style.display = 'block';
        // document.querySelector('.openImage').style.transform= '5s linear';
        // console.log(image1.getAttribute('src'));
        document.querySelector('.openImage .image img').src = image1.getAttribute('src');
        document.querySelector('#download').onclick = () => {
            console.log("Download");
            document.querySelector('.buttons a').href = image1.getAttribute('src');
            document.querySelector('.buttons a').download = 'download';
        }

    }
});

// document.querySelector('#left').onclick = () =>{
//     document.querySelector('.openImage .image img').src = image1.getAttribute('src');
// }

document.querySelector('#close').onclick = () => {
    console.log("Close");
    document.querySelector('.openImage').style.display = 'none';
}

document.querySelector('#darkmode').onclick = () => {
    document.querySelector('#darkmode').change(() => {
        if (document.querySelector('#darkmode').is(":checked")) {
            document.querySelector("body").addClass("dark-class");
            console.log("dark");
        } else {
            document.querySelector("body").removeClass("dark-class");
            console.log("light");
        }
    })
    document.querySelector('.openImage').style.display = 'none';
}

// document.onkeydown = (evt) => {
//     if (evt.keyCode == 27)
//     console.log("Esc");
//     document.querySelector('.openImage').style.display = 'none';
// }

document.onkeydown = evt => {
    if (evt.keyCode == 27) {
        console.log("Esc");
        document.querySelector('.openImage').style.display = 'none';
    }
};




let sliderImages = document.querySelectorAll(".imageContainer .image img"),
    current = 0;

function slideLeft() {
    sliderImages[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    sliderImages[current + 1].style.display = "block";
    current++;
}

document.querySelector("#leftArrow").onclick = () => {
    console.log("Left");
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
}

document.querySelector("#rightArrow").onclick = () => {
    console.log("Right");
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
}



// function open(){
//     let image1 = document.getElementsByClassName('.openImage');
//     image1 .style.display = 'block';
// }
// function close(){
//     let image1 = document.getElementsByClassName('.openImage');
//     image1 .style.display = 'none';
// }