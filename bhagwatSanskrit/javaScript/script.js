const images = [
    "../img/bhagwat1.webp",
    "../img/bhagwat4.webp",
    "../img/bhagwat5.webp",
    "../img/bhagwat6.webp",
    "../img/bhagwat7.webp",
    "../img/bhagwat8.webp",
    "../img/bhagwat9.jpg",
    "../img/bhagwat10.webp",
    "../img/bhagwat11.jpg",
    "../img/bhagwat12.jpg",
    "../img/bhagwat13.webp",
    "../img/bhagwat14.jpg",
    "../img/bhagwat15.webp",
    "../img/bhagwat16.webp",
    "../img/bhagwat17.webp"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const leftContent = document.getElementById("leftContent");

leftContent.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
});