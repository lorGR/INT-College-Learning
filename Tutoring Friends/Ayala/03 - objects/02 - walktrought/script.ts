interface Video {
    title: string,
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
        title: "harry potter",
        price: 40,
        rentBy: "id-1"
    },
    {
        title: "lord of the rings",
        price: 20,
        rentBy: "id-2"
    }
]

const persons = [
    {
        firstName: "Lior",
        lastName: "Grishin",
        id: "id-1",
    },
    {
        firstName: "Tal",
        lastName: "Yaron",
        id: "id-2",
    }
];

function priceInNis(video: Video) {
    console.log(video.price * 3.53);
}

priceInNis(videos[0]);

function isRented(video: Video, id: string){
    if(video.rentBy === id){
        const user = persons.find((person) => id === person.id);
        console.log(`${user?.firstName} ${user?.lastName} rent the video ${video.title}`);
    } else {
        console.log(`Video wasn't rent by user with id: ${id}`);
    }
}

isRented(videos[1], 'id-1');
