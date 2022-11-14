const previewBox = document.getElementById("previewBox");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorContainer = document.getElementById("colorContainer");

const handleChange = () => {
    previewBox.style.backgroundColor = `
    rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
}

const handleSubmit = (event) => {
    event.preventDefault();
    const newBox = document.createElement("div");
    newBox.style.width = "50px";
    newBox.style.height = "25px";
    newBox.style.backgroundColor = previewBox.style.backgroundColor;
    colorContainer.append(newBox);
}