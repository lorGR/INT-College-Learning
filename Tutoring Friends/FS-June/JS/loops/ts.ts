const form = document.getElementById("form") as HTMLFormElement;
const imageContainer = document.getElementById("imageContainer") as HTMLDivElement;
function handleAdd(event: any) {
    event.preventDefault();
    const userImage = event.target.elements.userImage.value;
    const img = document.createElement("img") as HTMLImageElement;
    
    img.src = userImage;
    imageContainer.append(img);
}