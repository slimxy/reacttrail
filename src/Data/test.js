export const myMovies = [
  {
    id: "001",
    name: "Black Adam ",
    mainImage: "./img/blackAdam_.jpg",
    images: [
      "../img/black-adam2.jpg",
      "../img/blackadam1.jpeg",
      "../img/blackadam3.jpg",
    ],
    year: 2022,
    rate: "69%",
    genre: "Action ",
    info: `"Lorem ipsum dolor sit amet consectetur
        adipisicing elit.Esse quidem blanditiis 
        corporis empore ipsam quam dolores vitae
        corporis tempore ipsam quam dolores vitae
        corporis tempore ipsam quam dolores vitae
        deserunt sequi dolor recusandae nam quos"`,
  },
  {
    id: "002",
    name: "The Adam Project ",
    mainImage: "../img/adam3_.jpg",
    images: ["../img/adam2.webp", "../img/adam1.jpg", "../img/adam4.jpg"],
    year: 2022,
    rate: "45%",
    genre: "Action ",
    info: "Lorem ipsum dolor sit amet consectetur\
        adipisicing elit.Esse quidem blanditiis \
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        deserunt sequi dolor recusandae nam quos!",
  },
  {
    id: "003",
    name: "Brahmastra ",
    mainImage: "../img/Brahmastra1.jpg",
    images: ["../img/brah1_.jpeg", "../img/brah3.jpeg", "../img/brah4.jpeg"],
    year: 2022,
    rate: "35%",
    genre: "Action ",
    info: "Lorem ipsum dolor sit amet consectetur\
        adipisicing elit.Esse quidem blanditiis \
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        deserunt sequi dolor recusandae nam quos!",
  },
  {
    id: "004",
    name: "Fast 9",
    mainImage: "../img/fast1.jpg",
    images: ["../img/fast2_.jpeg", "../img/fast3_.jpeg", "../img/fast4.jpeg"],
    year: 2022,
    rate: "78%",
    genre: "Action ",
    info: "Lorem ipsum dolor sit amet consectetur\
        adipisicing elit.Esse quidem blanditiis \
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        deserunt sequi dolor recusandae nam quos!",
  },
  {
    id: "005",
    name: "The wrong Place",
    mainImage: "../img/wrong1_.jpg",
    images: [
      "../img/black-adam2.jpg",
      "../img/blackadam1.jpeg",
      "../img/blackadam3.jpg",
    ],
    year: 2022,
    rate: "44%",
    genre: "Action ",
    info: "Lorem ipsum dolor sit amet consectetur\
        adipisicing elit.Esse quidem blanditiis \
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        corporis tempore ipsam quam dolores vitae\
        deserunt sequi dolor recusandae nam quos!",
  },
];
export function getMovies() {
  return myMovies;
}
export function getMovie(id) {
  return myMovies.find((m) => m.id === id);
}
