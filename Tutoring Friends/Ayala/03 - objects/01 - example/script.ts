interface Video {
    title : string, 
    price: number,
    rentBy: string
}

interface Person {
    firstName: string,
    lastName: string,
    id: string
}

const videos = [
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

const persons = [
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

function getVideoPriceNis(video: Video){
    return (video.price * 3.52).toFixed(2);
}

const firstVideo = getVideoPriceNis(videos[0]);
console.log(firstVideo);

function whoTookVideo(video: Video, id: string){
    if(video.rentBy === id) {
        const user = persons.find((person) => person.id === id);
        console.log(`${user?.firstName} ${user?.lastName} rent the video ${video.title} for ${video.price}$`);
    } else {
        console.log(`Video wasn't rent by user`);
    }

}

whoTookVideo(videos[1], "id-2");
