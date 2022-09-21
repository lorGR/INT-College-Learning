var form = document.getElementById("form");
var imageContainer = document.getElementById("imageContainer");
function handleAdd(event) {
    event.preventDefault();
    var userImage = event.target.elements.userImage.value;
    var img = document.createElement("img");
    img.src = userImage;
    imageContainer.append(img);
}
