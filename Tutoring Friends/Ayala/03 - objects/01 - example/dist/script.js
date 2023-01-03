var videos = [
    {
        title: "How I met Your Mother",
        price: 29.99,
        rentBy: "id-1"
    },
    {
        title: "Harry Potter",
        price: 49.99,
        rentBy: "id-2"
    }
];
var persons = [
    {
        firstName: "Lior",
        lastName: "Grishin",
        id: "id-1"
    },
    {
        firstName: "John",
        lastName: "Golds",
        id: "id-2"
    }
];
function getVideoPriceNis(video) {
    return (video.price * 3.52).toFixed(2);
}
var firstVideo = getVideoPriceNis(videos[0]);
console.log(firstVideo);
function whoTookVideo(video, id) {
    if (video.rentBy === id) {
        var user = persons.find(function (person) { return person.id === id; });
        console.log((user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName) + " rent the video " + video.title + " for " + video.price + "$");
    }
    else {
        console.log("Video wasn't rent by user");
    }
}
whoTookVideo(videos[1], "id-2");
