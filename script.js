
function Changes() {
    let element = document.getElementById("myElement");
    element.style.backgroundColor = "red";
    element.style.color = "white";
}

function ChangesQuerySelector() {
    let elementtwo = document.querySelector('.myElement2');
    elementtwo.style.backgroundColor = 'green';
    elementtwo.style.color = 'white';

}


function addImage() {
    var imageContainer = document.getElementById("imageContainer");
    var newImage = document.createElement("img");
    newImage.src = "https://www.moyaeuropa.com.ua/wp-content/uploads/barselona-%D0%B1%D0%B0%D1%80%D1%81%D0%B0.jpg"; 
    imageContainer.appendChild(newImage);
}


function resizeImage(action) {
    var image = document.getElementById("myImage");

    if (action === 'enlarge') {
        image.style.width = (image.clientWidth * 1.2) + 'px';
        image.style.height = (image.clientHeight * 1.2) + 'px';
    } else if (action === 'reduce') {
        image.style.width = (image.clientWidth * 0.8) + 'px';
        image.style.height = (image.clientHeight * 0.8) + 'px';
    }
}


function removeImage() {
    var imageContainer = document.getElementById("imageContainer");
    var lastImage = imageContainer.lastChild;
    
    if (lastImage) {
        imageContainer.removeChild(lastImage);
    }
}
